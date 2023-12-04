import AppName from './Components/AppName';
import AddTodo from './Components/AddTodo';
import TodoItems from './Components/TodoItems';
import WelcomeMessage from './Components/WelcomeMessage';
import './App.css';
 
import TodoItemsContextProvider, { TodoItemsContext } from './Store/todo-items-store';
 
function App() {


  return (
    <TodoItemsContextProvider>

      <center className="todo-container">

        <div className="container">

          <AppName></AppName>
          <AddTodo  ></AddTodo>
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>

        </div>

      </center>

    </TodoItemsContextProvider>

  );
}


export default App
