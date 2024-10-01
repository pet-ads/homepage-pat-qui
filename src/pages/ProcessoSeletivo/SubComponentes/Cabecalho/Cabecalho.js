import Header from '../../../../components/ui/Header/header';
import styles from './Cabecalho.module.css';
import useFetchProcessos from '../../../../hooks/fetch/useFetchProcesos';

function Cabecalho  (){ 
const {informacoes} = useFetchProcessos();
return(
<div className={styles.cabecalho}>
    <Header  texto="Processo Seletivo"/>
    <p className={styles.texto}>{informacoes.content}</p>
</div> 

)
}
export default Cabecalho; 