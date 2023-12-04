import styles from './Display.module.css'
function Display({showDisplay}) {
    return <div className={styles['ans-display']}>
        <input type="text" placeholder='00' value={showDisplay} readOnly/>
    </div>
}

export default Display;