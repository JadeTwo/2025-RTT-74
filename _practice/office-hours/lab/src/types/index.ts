// types/index.ts
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'all';

// added this myself
export type TaskPriority = 'low' | 'medium' | 'high' | 'all';

// added this myself 
export interface Filter {
    status?: TaskStatus;
    priority?: TaskPriority;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}
 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// types/index.ts
export interface TaskFilterProps {
  onFilterChange: (filters: Filter) => void;
}