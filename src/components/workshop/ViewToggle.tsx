
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
        <TabsList className="grid w-full grid-cols-2 p-1 rounded-lg bg-secondary/5">
          <TabsTrigger 
            value="map"
            onClick={() => onViewChange(true)}
            className="data-[state=active]:bg-secondary data-[state=active]:text-white rounded-md transition-all duration-300"
          >
            <Map className="h-4 w-4 mr-2" />
            Map View
          </TabsTrigger>
          <TabsTrigger 
            value="list"
            onClick={() => onViewChange(false)}
            className="data-[state=active]:bg-secondary data-[state=active]:text-white rounded-md transition-all duration-300"
          >
            <LayoutGrid className="h-4 w-4 mr-2" />
            List View
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
