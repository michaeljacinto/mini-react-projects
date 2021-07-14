import { useState } from 'react';
import { FaEdit } from "react-icons/fa";

function AddTodo(props) {
    const [title, setTitle] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();

        if (!title) {
            alert("Please add a task description.");
            return;
        }

        props.addTodo(title);
        setTitle("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    className="flex-1 px-2.5 bg-gray-200 placeholder-gray-500 focus:outline-none"
                    value={title}
                    onChange={(event) => { setTitle(event.target.value); console.log(event.target.value) }}
                />
                <button type="submit">
                    <FaEdit />
                </button>
            </form>
        </div>
    );
}

export default AddTodo;