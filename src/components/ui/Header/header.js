import styles from './header.module.css'
function Header( {texto}){
    return(
        <h1 className={styles.titulo}>{texto}</h1>
    )
};
export default Header;
