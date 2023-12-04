
import styles from './Componets/App.module.css'
import Display from './Componets/Display'
import Buttons from './Componets/Buttons'
import { useState } from 'react';
function App() {
  const buttons = ['%', '/', 'C', 'X', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '=']
   

  let [displayItem, setDisplayItem] = useState("");
  const handleClick = (buttonValue) => {

    if(buttonValue==='C'){
      
      setDisplayItem("") 

    }else if(buttonValue ==='='){

      let result = eval(displayItem);
      setDisplayItem(String(result));

    }else{
      let prevItem = displayItem;
      prevItem +=buttonValue;
      setDisplayItem(prevItem) 

    }
     
     
    

  };
   

  return (

    <>
      <center>
        <div className={styles['calc-container']}>

          <Display showDisplay={displayItem}  ></Display>

          <Buttons
            buttons={buttons}
            handleClick = {handleClick}
  
          ></Buttons>
        </div>
      </center>
    </>
  )
}

export default App
