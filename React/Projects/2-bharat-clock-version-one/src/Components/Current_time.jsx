
let Current_time = ()=>{
    let time = new Date();
    return <p>This is the current time: {time.toLocaleDateString()} -{"  "}{time.toLocaleTimeString()}</p>
}
export default Current_time; 