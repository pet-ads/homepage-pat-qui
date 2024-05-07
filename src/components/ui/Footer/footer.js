import { FaGithub } from 'react-icons/fa';
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a className={styles.gitIcon} href='https://github.com/pet-ads' rel="noreferrer" target="_blank"><FaGithub /></a>
            <pre className={styles.footer_content}>Desenvolvido com ♥ por 
            <a  className = {styles.link} href='http://petads.paginas.scl.ifsp.edu.br/' rel="noreferrer" target="_blank"> PET/ADS</a> @
            <a  className= {styles.link} href='https://scl.ifsp.edu.br' rel='noreferrer' target='_blank'>IFSP São Carlos.</a>
            </pre>
        </footer>
    )
} 