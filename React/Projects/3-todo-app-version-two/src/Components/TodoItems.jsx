import TodoItem from "./TodoItem";

function TodoItems({ todoItems ,handleOnClick}) {
    return (<>
            {todoItems.map((item,index) => (
                <TodoItem todoName={item.name} todoDate={item.dueDate} key={index}
                
                handleOnClick={() =>handleOnClick(index)}
                
                ></TodoItem>
            ))}
    </>);

}
export default TodoItems;


