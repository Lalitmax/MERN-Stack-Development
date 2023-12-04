
import styles from './Buttons.module.css'
function Buttons({ buttons,handleClick }) {

    
    
    return (<>

        <div className={styles.keys}>
            {buttons.map((item) => {
                return <button className={styles.button}
                    onClick={() => handleClick(item)}
                    key={item}>{item}

                </button>
            })}
        </div>


    </>);
}

export default Buttons;