import Link from "next/link";


const NavBar = () => {
  const user = false;
  const navItems = (
    <>
      <li className="">
        <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="">
        <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
          to="/about"
        >
          About
        </Link>
      </li>
      <li className="">
        <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
          to="/advisors"
        >
          Advisors
        </Link>
      </li>
      <li className="">
        <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
          to="/reviews"
        >
          Reviews
        </Link>
      </li>
      <li className="">
        <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
          to="/Dashboard"
        >
          Dashboard
        </Link>
      </li>

      {user && (
        <li>
          <Link
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
            to={
              isAdmin
                ? "/dashboard/adminHome"
                : isInstructor
                ? "/dashboard/instructorHome"
                : "/dashboard/studenthome"
            }
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div
        className={"bg-white text-black"}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-slate-600 font-bold menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="btn md:block hidden uppercase btn-ghost  text-xl"
            >
              EventGuru
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* {
                        <button className='mr-8 flex items-center justify-center gap-2'>

                            <input type="checkbox" className="toggle toggle-md" />
                            <FaMoon></FaMoon>
                        </button>
                    } */}

          {user ? (
            <p className="mr-2 md:mr-6">
              <Link>Log out</Link>
            </p>
          ) : (
            <>
              <p>
                <Link to="/login">Login</Link>
              </p>
            </>
          )}
          {user?.photoURL && (
            <label className="btn hidden md:block btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" alt="profile"/>
              </div>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
