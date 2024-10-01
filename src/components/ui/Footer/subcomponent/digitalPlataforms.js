import styles from "./digitalPlataforms.module.css";
import useFetchPlataformas from "../../../../hooks/fetch/useFetchPlataformas";

export default function DigitalPlatforms(){
    const {plataformas} = useFetchPlataformas();
    return(
        <div className={styles.platforms_content}>
        <h3 className={styles.text_section}>Plataformas</h3>
        <ul className={styles.list_platforms}>
          {plataformas.map((item) => (
            <li key={item.id}>
              <a
                className={styles.link}
                href={item.url}
                rel="noreferrer"
                target="_blank"
              >
                {item.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}