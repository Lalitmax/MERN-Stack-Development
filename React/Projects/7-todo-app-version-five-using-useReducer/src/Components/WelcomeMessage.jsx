import { TodoItemsContext } from "../Store/todo-items-store";
import { useContext } from "react";
function WelcomeMessage() {
    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;

    return (<>

       { todoItems.length===0 && <h1>Enjoy your Day! </h1>}

    </>);
}

export default WelcomeMessage;