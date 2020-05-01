import React from "react";

const Todo = (props) => {
return  props.todo.map((item) => {
 return <ul>
    <li key={item.id}>{item.text}</li>
  </ul>
});

  return <div>

  </div>
};

export default Todo