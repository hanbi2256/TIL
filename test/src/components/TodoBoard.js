import { React } from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
    console.log("todoBoard", props.todolist)
    return (
        <div>
            <h1
                style={{
                    color: 'lightblue'
                }}>Todo list</h1>
            {props.todolist.map((item) => <TodoItem item={item} />)}

        </div>
    )
}
export default TodoBoard
 