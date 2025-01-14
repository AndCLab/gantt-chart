import React, { useState } from "react";
import { GanttActivity } from "./schema/schema.tsx";
import { ActivityForm } from "./components/forms/activity-form.tsx";
import GanttChart from "./pages/gantt-chart.tsx";

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

      <GanttChart data={data} />
    </div>
  );
};

export default App;
