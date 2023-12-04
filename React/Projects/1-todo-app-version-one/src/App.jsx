import AppName from './Components/AppName';
import AddTodo from './Components/AddTodo';
import TodoItem1 from './Components/Todoitem1';
import TodoItem2 from './Components/Todoitem2';
import './App.css';

function App() {

  return (
    <center className="todo-container">

      <AppName></AppName>
      <div class="container">
      <AddTodo></AddTodo>
      <TodoItem1/>
      <TodoItem2/>
      </div>

    </center>
  );
}


export default App
