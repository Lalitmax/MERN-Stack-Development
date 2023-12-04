import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";

function TodoItems() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  const handleOnClick = contextObj.deleteItem;
 


    return (<>
            {todoItems.map((item,index) => (
                <TodoItem todoName={item.name} todoDate={item.dueDate} key={index}
              index = {index}
                ></TodoItem>
            ))}
    </>);

}
export default TodoItems;


