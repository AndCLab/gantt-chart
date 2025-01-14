import React, { useState } from "react";
import { GanttActivity } from "./schema/schema.tsx";
import { ActivityForm } from "./components/forms/activity-form.tsx";
import { GanttChart } from "./pages/gantt-chart.tsx";
import { CellComponent } from "./components/tables/cell-component.tsx";

const App: React.FC = () => {
  const [data, setData] = useState<GanttActivity[]>([]);

  const handleAddActivity = (activity: GanttActivity) => {
    const updatedData = [...data, activity];
    setData(updatedData);
  };

  return (
    <div>
      <div className="w-full p-8">
        <h1 className="font-bold text-2xl">Gantt Chart</h1>
        <div className="flex p-4 items-center justify-center">
          <ActivityForm onAddActivity={handleAddActivity} />
        </div>
      </div>

      <div className="flex w-full gap-4">
        <GanttChart data={data} />
        <CellComponent data={data}/>
      </div>

    </div>
  );
};

export default App;
