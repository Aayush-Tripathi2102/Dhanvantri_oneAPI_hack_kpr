import React from "react";
import logo from "../assets/logo.png";
import { navigation } from "../constants";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm mb-0`}
    >
      <div className="flex items-center px-5 py-3 lg:px-7.5 xl:px-10 max-xl:py-4">
        <Link className="w-[12rem] xl:mr-8 flex" to="/">
          <img src={logo} width={160} alt="Brainwave" />
          <p>&copy;</p>
        </Link>

        <nav
          className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.url}
                className={({ isActive }) =>
                  `block relative text-2xl ${
                    item.ai
                      ? ""
                      : "uppercase text-n-1/50 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12"
                  } 
    ${
      item.ai &&
      "lg:text-xl lg:leading-5 px-6 py-6 md:py-8 lg:mr-0.25 lg:font-bold lg:bg-gradient-to-r from-yellow-400 to-purple-600 lg:bg-clip-text lg:text-transparent lg:hover:text-transparent "
    } 
    ${isActive ? "text-n-2" : ""}`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </nav>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block ${
              isActive ? "font-bold text-n-2" : ""
            }`
          }
        >
          New Account
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block ${
              isActive ? "font-bold text-n-2" : ""
            }`
          }
        >
          Sign in
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
