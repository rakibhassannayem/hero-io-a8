import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-violet-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-color font-bold underline decoration-violet-700 underline-offset-3"
                      : "hover:underline hover:decoration-violet-700 hover:underline-offset-4"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={"/apps"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-color font-bold underline decoration-violet-700 underline-offset-4"
                      : "hover:underline hover:decoration-violet-700 hover:underline-offset-4"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={"/installation"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-color font-bold underline decoration-violet-700 underline-offset-4"
                      : "hover:underline hover:decoration-violet-700 hover:underline-offset-4"
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn bg-white border-0 flex items-center cursor-pointer">
            <img className="w-10" src="/logo.png" alt="" />
            <h1 className="text-color font-bold text-xl">HERO.IO</h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-3 px-1 font-medium">
            <li className="">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-color font-bold underline decoration-violet-700 underline-offset-3"
                    : "hover:underline hover:decoration-violet-700 hover:underline-offset-4"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={"/apps"}
                className={({ isActive }) =>
                  isActive
                    ? "text-color font-bold underline decoration-violet-700 underline-offset-4"
                    : "hover:underline hover:decoration-violet-700 hover:underline-offset-4"
                }
              >
                Apps
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={"/installation"}
                className={({ isActive }) =>
                  isActive
                    ? "text-color font-bold underline decoration-violet-700 underline-offset-4"
                    : "hover:underline hover:decoration-violet-700 hover:underline-offset-4"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/rakibhassannayem"
            target="_blank"
            className="btn bg-color"
          >
            <img src="/github.png" alt="" />
            <p className="!text-white">Contribute</p>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
