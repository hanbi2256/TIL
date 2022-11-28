import { React } from "react";

function TodoItem(props) {
    return (
        <div
            style=
            {{
                padding: '10px 10px',
                width: '300px',
                height: '50px',
                border: '1px solid lightblue',
            }}
        >
            {props.item}
        </div>
    )
}

export default TodoItem