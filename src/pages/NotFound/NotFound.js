import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="card-not-found">
        <img src="/images/experimento.png" alt="ilustração de um experimento sendo realizado."></img>
        <h1 className="error-found">404</h1>
        <h2 className="text-not-found">
          Ops! O experimento buscado não existe ou não pode ser encontrado.
        </h2>
        <Link to="/" className="return-home">
          Voltar para Home...
        </Link>
      </div>
    </div>
  );
}

export default NotFound;