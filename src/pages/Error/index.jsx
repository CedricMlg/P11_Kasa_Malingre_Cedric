import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>
      <span>Oups! La page que</span> <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
