import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  // const error = useRouteError();
  return (
    <div className="text-red-700 text-xl font-medium flex flex-col items-center justify-center mt-5">
      <img src="/error-404.png" alt="" />

      <h1 className="text-4xl font-semibold mt-3">Oops, page not found!</h1>
      <p className="text-secondary font-light mt-2">
        The page you are looking for is not available.
      </p>
      {/* {error.message} */}
      <Link to={-1} className="btn bg-color text-lg !text-white px-10 py-6 mt-5">Go Back!</Link>
    </div>
  );
};

export default ErrorPage;
