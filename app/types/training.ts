export interface IDay {
  id: string;
  name: string;
  description: string;
  img: string;
  progress: number;
  IsActive: boolean;
  trainings: ITraining[];
  previousProgress?: number;
}
export interface ITraining {
  id: string;
  title: string;
  description: string;
  sets: number;
  reps: number;
  img: string;
  rest: number;
  progress: number;
}
export interface WorkoutProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  exercises: ITraining[];
}
