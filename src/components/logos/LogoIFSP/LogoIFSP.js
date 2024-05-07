import styles from './LogoIFSP.module.css'
import IFSPLogo from '../../../resources/logos/LogoSRT.png'
function LogoIFSP (){
    return(
        <a href='https://srt.ifsp.edu.br/' rel="noreferrer" target="_blank">
                 <img className={styles.IFSPLogo} src={IFSPLogo}  alt='Identidade visual IFSP/SCL'/>  
        </a>

    )
}
export default LogoIFSP;