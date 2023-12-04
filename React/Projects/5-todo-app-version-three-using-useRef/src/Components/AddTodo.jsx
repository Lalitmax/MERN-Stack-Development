import { useState ,useRef} from "react";

import { IoIosAddCircle } from "react-icons/io";
function AddTodo({showData}) {
   
  let todoNameElement = useRef();
  let dueDateElement = useRef();
 

  const handleClicked = () =>{
     
    showData(todoNameElement.current.value,dueDateElement.current.value);
    todoNameElement.current.value=''
    dueDateElement.current.value=''
  }

  return <div className="row">
    <div className="col-4">
      <input type="text" ref={todoNameElement}   placeholder="Enter TODO  here"   />
    </div>
    <div className="col-4">
      <input type="date" ref={dueDateElement} />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success" onClick={handleClicked}><IoIosAddCircle/></button>
    </div>
  </div>
}

export default AddTodo;













// import { useState ,useRef} from "react";
// import { IoIosAddCircle } from "react-icons/io";
// function AddTodo({showData}) {
  
//   let todoNameElement = useRef();
//   let dueDateElement = useRef();

 
//   const handleClicked = () =>{
     
//     showData(todoNameElement.current,dueDateElement.current);
//     // todoNameElement.current
//     // dueDateElement.current
//     console.log(noOfTask.current);
//   }

//   return <div className="row">
//     <div className="col-4">
//       <input type="text" ref={todoNameElement}  value = {todoName} placeholder="Enter TODO  here"   />
//     </div>
//     <div className="col-4">
//       <input type="date" ref={dueDateElement} value={dueDate}   />
//     </div>
//     <div className="col-2">
//       <button type="button" className="btn btn-success" onClick={handleClicked}><IoIosAddCircle/></button>
//     </div>
//   </div>
// }

// export default AddTodo;