export interface GanttActivity {
    id: string;
    activity: string;
    dateCreated: string;
    planStart: string;
    planDuration: number;
    actualStart?: string;
    actualDuration?: number;
    percentage: number;
    beyondPlan?: number;
  }
  