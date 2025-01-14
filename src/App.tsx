import React, { useState } from "react";
import { GanttActivity } from "./schema/schema.tsx";
import DataInputForm from "./components/forms/activity-form.tsx";
import GanttChart from "./pages/gantt-chart.tsx";


const App: React.FC = () => {
  const [data, setData] = useState<GanttActivity[]>([]);

  const handleAddActivity = (activity: GanttActivity) => {
    const updatedData = [...data, activity];
    setData(updatedData);
  };

  return (
    <div>
      <h1>Gantt Chart</h1>
      <DataInputForm onAddActivity={handleAddActivity} />
      <GanttChart data={data} />
    </div>
  );
};

export default App;
