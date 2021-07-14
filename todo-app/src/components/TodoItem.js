import { FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
    return (
        <>
            {/* <div className="flex space-x-4 space-y-4"> */}
            <div className="">

                <p className="border-solid border-4 border-black rounded-lg">

                    <input type="checkbox" className="rounded appearance-none checked:bg-blue-600 checked:border-transparent" />

                    <label className="px-2">ID: {props.todoId} | Task: {props.todo} |</label>
                    <button
                        onClick={() => { props.delTodo(props.todoId); console.log(props.todoId) }}>
                        <FaTrashAlt />
                    </button>
                </p>
            </div>
        </>
    )
}

export default TodoItem;