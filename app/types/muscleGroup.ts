export interface IMuscleGroup {
  id?: React.Key;
  title: string;
  icon: string;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMuscleGroupId: React.Dispatch<React.SetStateAction<number>>;
}
export interface IExercisesItem {
  name: string;
  description: string;
  image: string;
}
