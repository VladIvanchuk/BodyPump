export interface IHistory {
  id: number;
  date: string;
  time: number;
  training: {
    id: number;
    name: string;
    description: string;
    time: number;
    progress: number;
    trainingPlan: {
      name: string;
    };
    kcal: number;
  };
}
