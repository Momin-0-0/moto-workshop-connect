import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';

interface Workshop {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  rating: number;
}

interface WorkshopMapProps {
  workshops?: Workshop[];
  selectedWorkshop?: Workshop | null;
  onWorkshopSelect?: (workshop: Workshop) => void;
}

export const WorkshopMap = ({ 
  workshops = [], 
  selectedWorkshop = null,
  onWorkshopSelect 
}: WorkshopMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const [token, setToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !token || isMapInitialized) return;

    try {
      mapboxgl.accessToken = token;
      
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-74.5, 40],
        zoom: 9
      });

      map.current = map;

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add geolocate control
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        }),
        'top-right'
      );

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  // Update markers when workshops change
  useEffect(() => {
    if (!map.current || !isMapInitialized) return;

    // Clear existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    // Add new markers
    workshops.forEach(workshop => {
      const el = document.createElement('div');
      el.className = 'workshop-marker';
      el.innerHTML = `<div class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110 ${
        selectedWorkshop?.id === workshop.id ? 'ring-2 ring-primary ring-offset-2' : ''
      }">
        <span class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
      </div>`;

      el.addEventListener('click', () => {
        onWorkshopSelect?.(workshop);
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat([workshop.longitude, workshop.latitude])
        .addTo(map.current!);

      markers.current.push(marker);
    });

    // Fit bounds to show all markers
    if (workshops.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      workshops.forEach(workshop => {
        bounds.extend([workshop.longitude, workshop.latitude]);
      });
      map.current.fitBounds(bounds, { padding: 50 });
    }
  }, [workshops, selectedWorkshop, isMapInitialized]);

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
        setIsMapInitialized(false);
      }
    };
  }, []);

  return (
    <div className="h-[600px] rounded-lg overflow-hidden shadow-lg relative">
      <div ref={mapContainer} className="w-full h-full" />
      {!isMapInitialized && (
        <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-md z-10 flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            Please enter your Mapbox token to initialize the map.<br />
            You can find your token at https://mapbox.com/ in the Tokens section of your account.
          </p>
          <div className="w-full max-w-md space-y-2">
            <Input
              type="text"
              placeholder="Enter your Mapbox token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <Button 
              className="w-full"
              onClick={initializeMap}
              disabled={!token}
            >
              Initialize Map
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};