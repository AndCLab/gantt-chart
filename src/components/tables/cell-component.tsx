import React from "react";
import styled from "styled-components";
import { RowComponent } from "./row-component.tsx";
import { GanttActivity } from "../../schema/schema.tsx";

interface GanttChartProps {
  data: GanttActivity[];
}

export const CellComponent = ({ data }: GanttChartProps) => {
    return (
        <div className="">
          <span className="flex items-center py-2 pb-4">Days</span>
          {data.map((activity) => (
            <div key={activity.id} className="">
              <RowComponent duration={activity.planDuration} />
            </div>
          ))}
        </div>
      );
};

