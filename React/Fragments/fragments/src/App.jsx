import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from './Components/ErrorMessage';
import FoodItems from './Components/FoodItems';
// import AddItem from './Components/Additem';
import Container from './Components/Container';
import FoodInput from './Components/FoodInput';
import { useState } from 'react';
function App() {

  let [foodItems,setNewFood] = useState(['Dal',"Ghee","Bringle"]);

  function handleOnKeyDown(event){
    if(event.key==='Enter'){
      let newFoodItem = event.target.value;
      let newItem = [...foodItems,newFoodItem];
      setNewFood(newItem)
      event.target.value=''
      // console.log()
    }
  
 
  }

  return (
    <>
      <Container>
        <h1 className='item-heading' style={{'color':'#fff'}}>Healthy Food</h1>
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
        <ErrorMessage Items={foodItems} ></ErrorMessage>
        <FoodItems Items={foodItems}></FoodItems>
      </Container>

    </>
  );
}

export default App;
