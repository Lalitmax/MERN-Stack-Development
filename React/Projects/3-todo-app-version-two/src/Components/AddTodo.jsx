import { useState ,useRef} from "react";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({showData}) {
  const [todoName, setTodoname] = useState('');
  const [dueDate, setDueDate] = useState('');

  let noOfTask = useRef(0);

  const handleChange = (event)=>{
    setTodoname(event.target.value);
  }
   
  const  handleDateChange = (event) =>{
    setDueDate(event.target.value);
  }

  

  const handleClicked = () =>{
    noOfTask.current +=1;
    showData(todoName,dueDate);
    setDueDate("");
    setTodoname("");
    console.log(noOfTask.current);
  }

  return <div className="row">
    <div className="col-4">
      <input type="text"  value = {todoName} placeholder="Enter TODO  here" onChange={handleChange} />
    </div>
    <div className="col-4">
      <input type="date" value={dueDate} onChange={handleDateChange} />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success" onClick={handleClicked}><IoIosAddCircle/></button>
    </div>
  </div>
}

export default AddTodo;