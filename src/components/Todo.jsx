/* eslint-disable react/prop-types */
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Todo = ({task, toggleCompleted, deleteTodo, editTodo}) => {
	return (
		<div className="Todo">
			<p onClick={() => toggleCompleted(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
			<div className="activeTodo">
				<FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className="edit-icon"/>
				<FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='delete-icon'/>
			</div>
		</div>
	)
}

export default Todo
