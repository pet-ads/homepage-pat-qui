import styles from './Title.module.css';
import LogoPET from '../../../../components/logos/LogoPET/LogoPET';

function Title({ title, content }) {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.subtitle}>{content}</h2>
                </div>
            <LogoPET />
            </div>
        </header>
    )
} export default Title;