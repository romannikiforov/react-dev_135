export type TaskItemType = {
  id: string;
  title: string;
  done: boolean;
};

export type TasksType = {
  tasks: TaskItemType[];
};
