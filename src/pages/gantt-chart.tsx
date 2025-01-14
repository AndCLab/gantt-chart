import React from "react";
import styled from "styled-components";
import { GanttActivity } from "../schema/schema";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;

const Cell = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  padding: 4px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface GanttChartProps {
  data: GanttActivity[];
}

const GanttChart: React.FC<GanttChartProps> = ({ data }) => {
  return (
    <ChartContainer>
      {/* Header Row */}
      <Row>
        {["Activity", "Date Created", "Plan Start", "Plan Duration", "Actual Start", "Actual Duration", "Completion", "Beyond Plan"].map((header) => (
          <Cell key={header} width="150px">{header}</Cell>
        ))}
      </Row>

      {/* Data Rows */}
      {data.map((activity) => (
        <Row key={activity.id}>
          <Cell width="150px">{activity.activity}</Cell>
          <Cell width="150px">{activity.dateCreated}</Cell>
          <Cell width="150px">{activity.planStart}</Cell>
          <Cell width="150px">{activity.planDuration} days</Cell>
          <Cell width="150px">{activity.actualStart || "N/A"}</Cell>
          <Cell width="150px">{activity.actualDuration || "N/A"} days</Cell>
          <Cell width="150px">{activity.percentage}%</Cell>
          <Cell width="150px">{activity.beyondPlan ? "Yes" : "No"}</Cell>
        </Row>
      ))}
    </ChartContainer>
  );
};

export default GanttChart;
