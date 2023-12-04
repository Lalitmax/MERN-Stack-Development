import styles from './ErrorMessage.module.css'
function ErrorMessage({Items}) {

    return <>
        {Items.length==0 &&  <h3 className={styles.EmptyFood}>I am Still Hungry</h3>}
    </>

}

export default ErrorMessage;