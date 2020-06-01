import React from "react";
import "./todo.css";
import classNames from "classnames";
const Todo = (props) => {
const {onToggleDoneAction, todo} = props;
    return (
        <ul className='todo-container'>
            {
                todo.map(item => {
                    const {id, text, done} = item;
                    return <li className='todo' key={id}>
                                <p onClick={() => {onToggleDoneAction(id)}} className={classNames('p', {'done': done})}>{text}</p>
                                <div className='btn-cont'>
                                    <button className='important todo-btn'>!</button>
                                    <button className='delete todo-btn'>del</button>
                                </div>
                            </li>
                })
            }
        </ul>
    )
};

export default Todo