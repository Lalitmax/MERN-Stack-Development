import AppName from './Components/AppName';
import AddTodo from './Components/AddTodo';
import TodoItems from './Components/TodoItems';
import WelcomeMessage from './Components/WelcomeMessage';
import './App.css';
import { useState } from 'react';
import { TodoItemsContext } from './Store/todo-items-store';

function App() {
  let [todoItems, setTodoItem] = useState([

  ])

  // const todoItems = 

  function addNewItem(todoName, dueDate) {

    // for better performance and dosen't glitch value
    setTodoItem((currValue) => {

      let newData = {
        name: todoName,
        dueDate: dueDate
      };
      let newTodoItems = [newData, ...todoItems];
      return newTodoItems;
    })



  }

  const deleteItem = (h) => {

    let indexToDelete = h;

    let newItems = [...todoItems.slice(0, indexToDelete), ...todoItems.slice(indexToDelete + 1)];

    setTodoItem(newItems);

  }


  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem,

    }}>
      <center className="todo-container">

        <div className="container">

          <AppName></AppName>

          <AddTodo  ></AddTodo>
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>

        </div>

      </center>
    </TodoItemsContext.Provider>
  );
}


export default App
