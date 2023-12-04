import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
});


const todoItemsReducer = (currTodoItems, action) => {

    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {

        let newData = {
            name: action.payload.todoName,
            dueDate: action.payload.dueDate
        };
        newTodoItems = [newData, ...currTodoItems];


    } else if (action.type === "DELETE_ITEM") {

        let indexToDelete = action.payload.h;

        let newItems = [...currTodoItems.slice(0, indexToDelete), ...currTodoItems.slice(indexToDelete + 1)];

        newTodoItems = newItems;


    }
    return newTodoItems;

}


function TodoItemsContextProvider({children}) {


    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    function addNewItem(todoName, dueDate) {


        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                todoName, dueDate
            }
        };
        dispatchTodoItems(newItemAction);


    }



    const deleteItem = (h) => {


        let newItemAction = {
            type: "DELETE_ITEM",
            payload: { h }
        }
        dispatchTodoItems(newItemAction);

    }

    return (<>

        <TodoItemsContext.Provider value={{
            todoItems: todoItems,
            addNewItem: addNewItem,
            deleteItem: deleteItem,

        }}>
            {children}

        </TodoItemsContext.Provider>


    </>);


}

export default TodoItemsContextProvider;