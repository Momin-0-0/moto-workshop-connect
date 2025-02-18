
import { WorkshopCard } from "./WorkshopCard";

interface WorkshopListProps {
  workshops: any[];
  onWorkshopSelect: (workshop: any) => void;
}

export const WorkshopList = ({ workshops, onWorkshopSelect }: WorkshopListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workshops.map((workshop) => (
        <WorkshopCard
          key={workshop.id}
          workshop={workshop}
          onSelect={onWorkshopSelect}
        />
      ))}
      {workshops.length === 0 && (
        <div className="col-span-full text-center py-12 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">No Workshops Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search criteria
          </p>
        </div>
      )}
    </div>
  );
};
