import React from "react";

export default function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="w-full mx-auto 2xl:max-w-[90rem] p-6">
        <div className="p-5 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:gap-12 xl:gap-32">
            <div className="items-start italic">
              {/* Sliding Text animation */}
              <div className="font-bold text-4xl md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-t from-[#213975] to-[#98B0DC]">
                State Your{" "}
                <span className=" text-[#7D95C5] inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                    <li>Dream</li>
                    <li>Design</li>
                    <li>Inspiration</li>
                    <li>Dream</li>
                  </ul>
                </span>{" "}
                to Build a Future
              </div>
              {/* End: Sliding Text animation */}
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <p className="text-gray-700 text-xs md:text-base">
                    Our company operates with a vision aiming for excellence in
                    the manufacturing of aircraft components. By embracing
                    customer satisfaction as a fundamental principle, we aim to
                    become a reliable and quality symbol in the aviation
                    industry.
                  </p>
                </div>
                {/* <div className="inline-flex">
                  <a href="#">
                    <span className="h-10 flex items-center justify-center uppercase font-semibold px-5 border border hover:bg-black hover:text-white text-xs transition duration-500 ease-in-out">
                      See Details
                    </span>
                  </a>
                </div> */}
                {/* End Title */}
                {/* List */}

                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </div>
    </>
  );
}
