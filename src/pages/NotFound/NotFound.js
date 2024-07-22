import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <div className="cardNotFound">
        <img src="/images/experimento.png" alt="ilustração de um experimento sendo realizado."></img>
        <h1 className="errorFound">404</h1>
        <h2 className="textNotFound">
          Ops! O experimento buscado não existe ou não pode ser encontrado.
        </h2>
        <Link to="/" className="returnHome">
          Voltar para Home...
        </Link>
      </div>
    </div>
  );
}

export default NotFound;