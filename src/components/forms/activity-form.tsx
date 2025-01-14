import React, { useState } from "react";
import { GanttActivity } from "../../schema/schema";

interface ActivityFormProps {
  onAddActivity: (activity: GanttActivity) => void;
}

export const ActivityForm = ({ onAddActivity }: ActivityFormProps) => {
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
      const today = new Date();
      const planStartDate = new Date(formData.planStart);
      const planEndDate = new Date(
        planStartDate.getTime() + formData.planDuration * 24 * 60 * 60 * 1000
      );
      const beyondPlan =
        today > planEndDate
          ? Math.ceil((today.getTime() - planEndDate.getTime()) / (1000 * 60 * 60 * 24))
          : 0;

      const newActivity: GanttActivity = {
        ...formData,
        id: Date.now().toString(),
        beyondPlan,
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
      <div className="flex gap-4">
        <div className="flex gap-2 text-lg items-center justify-center">
          <span>Activity</span>
          <input
            type="text"
            name="activity"
            placeholder="Activity Name"
            value={formData.activity || ""}
            onChange={handleChange}
            className="border border-gray-600 rounded-lg p-1 pl-2"
            required
          />
        </div>
        <div className="flex gap-2 text-lg items-center justify-center">
          <span>Plan Start</span>
          <input
            type="date"
            name="planStart"
            placeholder="Plan Start"
            value={formData.planStart || ""}
            onChange={handleChange}
            className="border border-gray-600 rounded-lg p-1 pl-2"
            required
          />
        </div>
        <div className="flex gap-2 text-lg items-center justify-center">
          <span>Plan Duration</span>
          <input
            type="number"
            name="planDuration"
            placeholder="Duration (days)"
            value={formData.planDuration || 0}
            onChange={handleChange}
            className="border border-gray-600 rounded-lg p-1 pl-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-400 rounded-lg p-2 text-center font-bold border border-gray-600">Add Activity</button>
      </div>
    </form>
  );
};

