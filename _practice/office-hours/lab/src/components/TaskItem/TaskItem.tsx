import type { TaskItemProps, TaskStatus } from "../../types"

function TaskItem({ task, onDelete, onStatusChange }: TaskItemProps) {

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onStatusChange(task.id, e.target.value as TaskStatus)
    }

    return (
        <li style={{ border: '1px solid black' }}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <select defaultValue={task.status} onChange={handleStatusChange}>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Pending</option>
            </select>
            <div>priority: {task.priority}</div>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    )
}

export default TaskItem