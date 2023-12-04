import styles from './FoodInput.module.css'
const FoodInput = ({handleOnKeyDown}) =>{
    return (<>

        <input type="text" placeholder="Enter Food Name" className={styles.foodInput}
        onKeyDown={handleOnKeyDown}
        />
    
    </>);
}

export default FoodInput;