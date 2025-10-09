import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img className="w-80" src="/appError.png" alt="" />

      <h1 className="text-4xl font-semibold mt-3">OPPS!! APP NOT FOUND</h1>
      <p className="text-secondary mt-2">
        The App you are requesting is not found on our system. please try
        another apps
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

export default NotFound;
