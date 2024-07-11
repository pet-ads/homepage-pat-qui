import styles from "./LogoPET.module.css";
import Logo from "../../../resources/logos/LogoPET.png";
function LogoPET() {
  return (
    <img
      className={styles.PETLogo}
      src={Logo}
      alt="Identidade Visual PET/QUI"
    />
  );
}
export default LogoPET;
