import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const WorkshopMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !token || isMapInitialized) return;

    try {
      // Initialize map
      mapboxgl.accessToken = token;
      
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-74.5, 40],
        zoom: 9
      });

      mapInstance.current = map;

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
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