import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="px-10 bg-[#181C14] h-24 flex justify-between items-center m-5 rounded-3xl sticky top-0 z-20">
        <div className="text-white relative group">
          <h1 className="lg:text-3xl md:text-2xl text-xl hover:text-yellow-500 transition-all duration-300">
            <Link
              to="intro"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              SIDDHANT
            </Link>
          </h1>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </div>
        <nav className="w-1/2 hidden lg:block">
          <ul className="text-white flex justify-between items-center w-full text-xl capitalize">
            <li className="relative group">
              <Link
                to="intro"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-yellow-500 transition-all duration-300"
              >
                home
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:text-yellow-500 transition-all duration-300"
              >
                about
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-yellow-500 transition-all duration-300"
              >
                portfolio
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:text-yellow-500 transition-all duration-300"
              >
                education
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <button
            className="px-6 py-3 bg-white text-black rounded-3xl transform transition-transform duration-300 hover:scale-90 capitalize text-xl flex justify-center items-center gap-2"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={contactImg} alt="" className="w-5" />
            contact me
          </button>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------- */}

        <img
          src={menu}
          alt="Menu"
          className="lg:hidden block h-8"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="absolute top-20 right-8 z-20 flex flex-col p-2 h-auto min-w-[15rem] bg-gray-800 rounded-xl"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-[rgb(30,30,30)]"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-[rgb(30,30,30)]"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-[rgb(30,30,30)]"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-[rgb(30,30,30)]"
            onClick={() => setShowMenu(false)}
          >
            Education
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-[rgb(30,30,30)]"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
