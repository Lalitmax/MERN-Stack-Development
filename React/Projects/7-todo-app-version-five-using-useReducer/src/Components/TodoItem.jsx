import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../Store/todo-items-store";
import { useContext } from "react";
function TodoItem({todoName,todoDate,index}) {
     
    const {deleteItem} = useContext(TodoItemsContext);

    return <div className="row row-item">
        <div className="col-4 left-name">
            {todoName}
        </div>
        <div className="col-4">
            {todoDate}
        </div>
        <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={()=>deleteItem( index)}><MdDelete/></button>
        </div>
    </div>
}

export default TodoItem;
