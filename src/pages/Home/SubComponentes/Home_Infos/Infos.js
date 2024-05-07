import styles from './Infos.module.css'

function Info({title, content}){
    return(
        <>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{content}</p>
        </>       
    )
}export default Info;