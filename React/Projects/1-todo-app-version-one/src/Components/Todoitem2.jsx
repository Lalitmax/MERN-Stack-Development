function TodoItem2() {
    let todoName='Go To College'
    let todoDate='12-10-2023';
    return <div class="row">
        <div class="col-4">
            {todoName}
        </div>
        <div class="col-4">
            {todoDate}
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    </div>
}

export default TodoItem2;
