import Header from '../../../../components/ui/Header/header';
import styles from './Cabecalho.module.css'
function Cabecalho  ({titulo,texto }){ 
return(
<div className={styles.cabecalho}>
    <Header  texto = {titulo}/>
    <p className={styles.texto}>{texto}</p>
</div> 

)
}
export default Cabecalho; 