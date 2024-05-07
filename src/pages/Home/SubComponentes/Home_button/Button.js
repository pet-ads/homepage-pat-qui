import {Link} from "react-router-dom";
import styles from "./Button.module.css"
import useScrollToTop from "../../../../hooks/window/useScrollToTop";

function Button({value,to}){
    return(
        <div className={styles.btn_contender} >
          
            <Link className={styles.btn} type='button' to={to} onClick={useScrollToTop}> 
                {value}
            </Link>
    
        </div>
       
    )

}export default Button;