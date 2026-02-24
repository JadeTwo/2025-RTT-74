import type { TaskFilterProps, TaskPriority, TaskStatus } from "../../types"

function TaskFilter({ onFilterChange }: TaskFilterProps) {

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ status: e.target.value as TaskStatus})
    }

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ priority: e.target.value as TaskPriority})
    }

    return (
        <div>
            <label htmlFor="status">Status</label>
            <select defaultValue="all" id="status" onChange={handleStatusChange}>
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <label htmlFor="priority">Priority</label>
            <select defaultValue="all" id="priority" onChange={handlePriorityChange}>
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
        </div>
    )
}

export default TaskFilter