import { useEffect } from "react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
