import { useState } from "react"

import type { TaskListProps, Filter } from "../../types"

import TaskFilter from "../TaskFilter/TaskFilter"
import TaskItem from "../TaskItem/TaskItem"

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    
    const [filter, setFilter] = useState<Filter>({ status: 'all', priority: 'all' })

    const handleFilterChange = (filters: Filter) => { 
        setFilter(prevFilter => ({ ...prevFilter, ...filters }))
    }

    const filteredTasks = tasks.filter(t => {
          let statusCheck = filter.status === t.status || filter.status === 'all'
          let priorityCheck = filter.priority === t.priority || filter.priority === 'all'
          return statusCheck && priorityCheck ? true : false
    })

    let showTasks = filteredTasks.length

    return (
        <ul>
            <TaskFilter
                onFilterChange={handleFilterChange}
            />
            {
                showTasks ? 
                    filteredTasks.map((task) => 
                        <TaskItem 
                            key={task.id}
                            task={task} 
                            onDelete={onDelete}
                            onStatusChange={onStatusChange}
                        />
                    ) 
                : 
                    <div>No tasks match the current filters</div>}
        </ul>
    )
}

export default TaskList