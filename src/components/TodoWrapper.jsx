/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import EditTodoForm from './EditTodoForm'
import Todo from './Todo'
import TodoForm from './TodoForm'
uuidv4()

const TodoWrapper = () => {
	const [todos, setTodos] = useState([])

	const addTodo = (todo) => {
		if(todo)
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
  }

	const toggleCompleted = (id) => {
		setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
	}

	const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id))
  }

	const editTodo = (id, task) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, task: task, isEditing: !todo.isEditing} : todo))
  }

	const editTask = (task, id) => {
		setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
	}

	return (
		<div className='TodoWrapper'>
			<h1>Задачи на сегодня</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo, index) => (
				todo.isEditing ? (
					<EditTodoForm editTodo={editTask} task={todo} />
				) : (
					<Todo task={todo} key={index} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo}/>
				)
			))}
		</div>
	)
}

export default TodoWrapper
