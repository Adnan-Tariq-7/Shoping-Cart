import { FaCartPlus } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";
import { navLinks } from "../constants";
import { RiMenu3Line } from "react-icons/ri";
import { CartState } from "../context/Context";
import { LuDelete } from "react-icons/lu";
import { Button } from "../components";
import { Link } from "react-router-dom";

const Header = ({ setTheme, theme,hideNav }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleMenu=()=>{
    setIsOpen(prev=>!prev)
    setOpenCart(false)
  }
  const handleCart=()=>{
    setOpenCart(prev=>!prev)
    setIsOpen(false)
  }

  return (
    <section id="header" className="sticky top-0 left-0 right-0 z-50">
      <header className="flex justify-between items-center py-3 px-4 md:py-4 md:px-5 lg:py-5 lg:px-10 dark:bg-dark-forground  bg-white">
        <h1 className="text-4xl font-bold max-md:hidden text-primary ">
          <Link to="/">Adnan</Link>
        </h1>
        <h1 className="text-4xl font-bold md:hidden text-primary"><Link to='/'>A</Link> </h1>
        <nav className="max-md:hidden">
          <ul className="flex gap-2 text-slate-gray dark:text-dark-slate-gray">
            {navLinks.map((val, i) => (
              <li key={i} className="px-3 py-2  lg:px-5 ">
                <a href={val.href}>{val.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="addToCart flex gap-3 text-slate-gray dark:text-dark-slate-gray">
        {!hideNav && 
          <div
            className="md:hidden relative "
            onClick={handleMenu}
          >
            <RiMenu3Line size={30} />
              <nav
              className={`absolute top-full left-0 w-36 overflow-hidden transition-all duration-1000 transform ${
                isOpen ? "opacity-100 max-h-screen" : " max-h-0 opacity-0"
              } -translate-x-1/2 border bg-white`}
            >
              <ul className="flex flex-col gap-2 text-slate-gray dark:bg-dark-forground">
                {navLinks.map((val, index) => (
                  <li
                    key={index}
                    className="px-5 py-2 border-b  dark:text-dark-slate-gray "
                  >
                    <a href={val.href}>{val.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          
          </div>}
          {theme == "light" ? (
            <CiLight
              size={30}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          ) : (
            <MdLightMode
              size={30}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          )}

          <div
            className="relative"
            onClick={handleCart}
          >
            <FaCartPlus size={30} />
            <p className="absolute -top-3 -right-3 text-xs w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full">
              {cart.length}
            </p>
            <div
              className={`flex absolute top-12 transition-all duration-1000 shadow-2xl gap-5 ${
                openCart ? "max-h-screen  p-5 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden flex-col right-0 rounded-md w-72 bg-white dark:bg-dark-forground `}
            >
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex-grow ml-3">
                    <h1 className="text-md font-semibold text-primary">
                      {item.name}
                    </h1>
                    <p className="text-gray-600 dark:text-dark-slate-gray">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 "
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: "REMOVE_FROM_CART", payload: item });
                    }}
                  >
                    <LuDelete size={24} />
                  </button>
                </div>
              ))}
              <div className="mx-auto">
                <Link to="/cart">
                  <Button name={"View Carts"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
