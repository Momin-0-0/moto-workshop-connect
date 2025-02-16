
import { Map, LayoutGrid } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ViewToggleProps {
  showMap: boolean;
  onViewChange: (showMap: boolean) => void;
}

export const ViewToggle = ({ showMap, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex justify-center">
      <Tabs defaultValue={showMap ? "map" : "list"} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger 
            value="map"
            onClick={() => onViewChange(true)}
            className="data-[state=active]:bg-secondary data-[state=active]:text-white"
          >
            <Map className="h-4 w-4 mr-2" />
            Map View
          </TabsTrigger>
          <TabsTrigger 
            value="list"
            onClick={() => onViewChange(false)}
            className="data-[state=active]:bg-secondary data-[state=active]:text-white"
          >
            <LayoutGrid className="h-4 w-4 mr-2" />
            List View
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
