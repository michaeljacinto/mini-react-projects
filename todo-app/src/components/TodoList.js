import { useState } from 'react';
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from "uuid";
import TodoItem from './TodoItem';

function TodoList() {

    const [todos, setTodos] = useState([
        {
            id: "1",
            title: "Feed the cat",
            completed: true,
        },
        {
            id: "2",
            title: "Meeting at school",
            completed: false,
        },
        {
            id: "3",
            title: "Grocery shopping",
            completed: false,
        },
    ]);

    const addTodo = (title) => {
        let newTodo = {
            id: uuidv4(),
            title, // title same as title: title
            completed: false,
        }
        setTodos([...todos, newTodo]);
    };

    return (
        <>
            <AddTodo addTodo={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo.title}
                        id1={todo.id}
                    />
                ))}
            </ul>
        </>
    )
}

export default TodoList;