import { FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
    return (
        <>
            <p>ID: {props.todoId} | Task: {props.todo}</p>
            <button
                onClick={() => { props.delTodo(props.todoId); console.log(props.todoId) }}>
                <FaTrashAlt />
            </button>
        </>
    )
}

export default TodoItem;