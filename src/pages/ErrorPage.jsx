import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img className="w-80" src="/error404.png" alt="" />

      <h1 className="text-4xl font-semibold mt-3">Oops, page not found!</h1>
      <p className="text-secondary mt-2">
        The page you are looking for is not available.
      </p>

      <Link
        to={-1}
        className="btn bg-color text-lg !text-white px-10 py-6 mt-5"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
