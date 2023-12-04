import { MdDelete } from "react-icons/md";
function TodoItem({todoName,todoDate,handleOnClick}) {
     

    return <div className="row row-item">
        <div className="col-4 left-name">
            {todoName}
        </div>
        <div className="col-4">
            {todoDate}
        </div>
        <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={handleOnClick}><MdDelete/></button>
        </div>
    </div>
}

export default TodoItem;
