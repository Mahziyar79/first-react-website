import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>404 error</p>
      <br />
      <p>Page Not Found</p>
      <br />
      <Link to="/">go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
