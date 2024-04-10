import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-7xl text-orange-700 mb-2"> 404</p>
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-2xl text-gray-600 mb-4">Page not found</p>
      <Link to="/" className="text-lg text-gray-600 link">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
