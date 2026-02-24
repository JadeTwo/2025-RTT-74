import type { Task } from './types'

const tasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'completed',
    priority: 'high',
    dueDate: '1/2/26'
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'pending',
    priority: 'medium',
    dueDate: '1/3/26'
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'in-progress',
    priority: 'low',
    dueDate: '1/4/26'
  },
]

export default tasks