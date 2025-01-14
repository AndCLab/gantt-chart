import React, { useState } from "react";
import { GanttActivity } from "../../schema/schema";

interface DataInputFormProps {
  onAddActivity: (activity: GanttActivity) => void;
}

const DataInputForm: React.FC<DataInputFormProps> = ({ onAddActivity }) => {
  const [formData, setFormData] = useState<Partial<GanttActivity>>({
    activity: "",
    dateCreated: new Date().toISOString().split("T")[0],
    planStart: "",
    planDuration: 0,
    actualStart: "",
    actualDuration: 0,
    percentage: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.activity && formData.planStart && formData.planDuration) {
      const newActivity: GanttActivity = {
        ...formData,
        id: Date.now().toString(),
        beyondPlan: false,
      } as GanttActivity;
      onAddActivity(newActivity);
      setFormData({
        activity: "",
        dateCreated: new Date().toISOString().split("T")[0],
        planStart: "",
        planDuration: 0,
        actualStart: "",
        actualDuration: 0,
        percentage: 0,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="activity"
        placeholder="Activity Name"
        value={formData.activity || ""}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="planStart"
        placeholder="Plan Start"
        value={formData.planStart || ""}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="planDuration"
        placeholder="Duration (days)"
        value={formData.planDuration || 0}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default DataInputForm;
