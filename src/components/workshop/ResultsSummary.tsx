
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ResultsSummaryProps {
  count: number;
  selectedDistance: string;
  onDistanceChange: (value: string) => void;
}

export const ResultsSummary = ({ count, selectedDistance, onDistanceChange }: ResultsSummaryProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-muted/30 p-4 rounded-lg animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Available Workshops</h2>
        <p className="text-muted-foreground">
          Showing {count} workshops in your area
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Select value={selectedDistance} onValueChange={onDistanceChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by distance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nearest">Nearest first</SelectItem>
            <SelectItem value="farthest">Farthest first</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
