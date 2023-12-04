 import styles from './Item.module.css'
function Item({item, buyBtn,bought}){
 
    return <li  key={item} className= {`${styles["lalit-item"]} list-group-item ${bought ? styles.active2 : ''}`}>{item}
    <button  className={`${styles.rightBtn} btn btn-primary ${bought && styles.active3} `}

    onClick={buyBtn}
    
    >{bought ? 'Remove' : 'Buy'}</button>

    </li>
}

export default Item;
 