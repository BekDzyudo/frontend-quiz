import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();

  if (err.status === 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>error page</h3>
          <Link to="/" className="btn">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error-container container">
      <div>
        <h3>Nimadir xato</h3>
        <Link to="/" className="btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
