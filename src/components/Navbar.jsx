import avitechLogo from "../assets/avitech.png";

export default function Navbar() {
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

          </nav>
        </div>
      </div>
    </>
  );
}
