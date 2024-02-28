import avitechLogo from "../assets/avitech.png";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useState } from "react";

export default function Navbar() {

    const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false); // Menüyü kapat
  };
  let flag;

  if (i18n.language === "en") {
    flag = <i className="fi fi-gb"></i>; // Font Awesome'den İngiliz bayrağı ikonu
  } else if (i18n.language === "de") {
    flag = <i className="fi fi-gb"></i>; // Font Awesome'den Alman bayrağı ikonu
  } else {
    flag = <i className="fi fi-gb"></i>; // Diğer durumlar için null veya varsayılan bayrak
  }


  return (
    <>
      <div className="w-full bg-[#FEFBFA] sticky top-0 z-40 ">
        <div
          x-data="{ open: false }"
          className="relative flex flex-col w-full p-7 mx-auto  md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 mx-auto 2xl:max-w-[90rem] "
        >
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
              href="/"
            >
              <span className="lg:text-lg uppecase focus:ring-0">
                <img src={avitechLogo} alt="Avitech" width={140} height={80} />
              </span>
            </a>
            <button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"></button>
          </div>
          <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row uppercase font-bold transition ">
            <a
              className="px-2 py-2 text-xs text-slate-950 lg:px-5 md:px-3 hover:text-blue-950 lg:ml-auto "
              href="#"
            >
              Home
            </a>

            <a
              className="px-2 py-2 text-xs text-slate-950 lg:px-5 md:px-3 hover:text-blue-950 transition duration-1000"
              href="#about-us"
            >
              About
            </a>

            <a
              className="px-2 py-2 text-xs text-slate-950 lg:px-5 md:px-3 hover:text-blue-950"
              href="#contact-us"
            >
              Contact
            </a>

            <div className="relative inline-block text-left">
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {i18n.language === "en" ? (
                    <i className="fi fi-gb"></i>
                  ) : i18n.language === "de" ? (
                    <i className="fi fi-de"></i>
                  ) : null}
                </button>
                {isOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <button
                        className="text-gray-700 block px-4 py-2 text-sm"
                        onClick={() => handleLanguageChange("en")}
                      >
                        <i className="flag-icon flag-icon-gb"></i>
                        <span className="ml-1">English</span>
                      </button>
                      <button
                        className="text-gray-700 block px-4 py-2 text-sm"
                        onClick={() => handleLanguageChange("de")}
                      >
                        <i className="flag-icon flag-icon-de"></i>
                        <span className="ml-1">Deutsch</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

           
          </nav>
        </div>
      </div>
    </>
  );
}
