import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-red-700 text-xl font-medium">{error.message} !</div>
  );
};

export default ErrorPage;
