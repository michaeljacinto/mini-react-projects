import { useState } from 'react';
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from "uuid";
import TodoItem from './TodoItem';

function TodoList() {

    const [todos, setTodos] = useState([
        {
            id: "1",
            title: "Feed the cat",
            completed: false,
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

    const delTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // const markComplete = (id) => {
    //     setTodos(
    //         todos.map((todo) =>
    //             todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //         )
    //     );
    // };

    // Toggle completed state of todo item
    const markComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <>
            <div className="flex place-items-center flex-col bg-gray-200 rounded shadow-lg">
                <AddTodo addTodo={addTodo} />
                <ul>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo.title}
                            todoObj={todo}
                            todoId={todo.id}
                            delTodo={delTodo}
                            markComplete={markComplete}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList;