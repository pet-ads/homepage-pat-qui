import Title from "../Home_title/Title";
import styles from "./HeaderConteiner.module.css"

function HeaderConteiner(){
    return(
        <div className={styles.headerConteiner}>

        <Title
            title="Bem-vindo à página do PET/QUI @ IFSP"
            content="Programa de Educação Tutorial" />

    </div>
    )
}
export default HeaderConteiner;