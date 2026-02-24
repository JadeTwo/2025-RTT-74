import { useState } from 'react'
import './App.css'

import TaskList from './components/TaskList/TaskList'

import initialTasksData from './data'

import type { Task, TaskStatus } from './types'

function App() {

  const [tasks, setTasks] = useState<Task[]>(initialTasksData)

  const handleDelete = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.filter(t => t.id !== taskId)
    )
  }

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(t =>
        t.id === taskId ? { ...t, status: newStatus } : t
      )
    )
  }

  return (
    <>
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </>
  )
}

export default App


