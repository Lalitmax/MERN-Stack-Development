import AppName from './Components/AppName';
import AddTodo from './Components/AddTodo';
import TodoItems from './Components/TodoItems';
import WelcomeMessage from './Components/WelcomeMessage';
import './App.css';
import { useState } from 'react';

function App() {
  let [todoItems, setTodoItem] = useState([
     
  ])

  // const todoItems = 

  function showData(todoName, dueDate) {
 
 
    setTodoItem((currValue) =>{

      let newData = {
        name: todoName,
        dueDate: dueDate
      };
      let newTodoItems = [newData,...todoItems];
      return newTodoItems;
    })



  }

  const handleOnClick = (h) => {

    let indexToDelete = h;

    let newItems = [...todoItems.slice(0, indexToDelete), ...todoItems.slice(indexToDelete + 1)];

    setTodoItem(newItems);
     
  }


  return (
    <center className="todo-container">

      <div className="container">

        <AppName></AppName>
        <AddTodo showData={showData}></AddTodo>
        {todoItems.length==0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems todoItems={todoItems}

          handleOnClick={handleOnClick}
        ></TodoItems>

      </div>

    </center>
  );
}


export default App
