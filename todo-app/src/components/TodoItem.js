import { FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
    let textDecorationClass = props.todoObj.completed
        ? "line-through"
        : "no-underline";
    let textColorClass = props.todoObj.completed
        ? "text-pink-600"
        : "text-gray-800";

    return (
        <>
            <li
                className={`flex items-center space-x-1 py-2.5 px-2.5 border-b border-gray-300 transition duration-300 ease-in ${textDecorationClass} ${textColorClass}`}
                data-testid="todo-item"
            >

                {/* <p className="border-solid border-4 border-black rounded-lg"> */}
                {/* 
                <input
                    type="checkbox"
                    className="rounded appearance-none checked:bg-blue-600"
                    onChange={() => { props.markComplete(props.todoId); console.log(props.todoId) }}
                /> */}

                <input
                    name="completed-checkbox"
                    type="checkbox"
                    className="form-checkbox rounded text-pink-600 shadow-none focus:shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
                    checked={props.todo.completed}
                    value={props.todo.completed}
                    onChange={() => props.markComplete(props.todoId)}
                    data-testid="task-completed-checkbox"
                />

                {/* <label className="px-2">ID: {props.todoId} | Task: {props.todo} |</label> */}
                <span className="flex-1 px-2 min-w-0 break-words">
                    {props.todo}
                </span>
                <button
                    onClick={() => { props.delTodo(props.todoId); console.log(props.todoId) }}>
                    <FaTrashAlt />
                </button>
                {/* </p> */}
            </li>
        </>
    )
}

export default TodoItem;