export interface IDay {
  id: string;
  title: string;
  body: string;
  img: string;
  progress: number;
  IsActive: boolean;
  trainings: ITraining[];
}
export interface ITraining {
  id: string;
  title: string;
  description: string;
  sets: number;
  reps: number;
  img: string;
  rest: number;
}
export interface WorkoutProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  exercises: ITraining[];
}
