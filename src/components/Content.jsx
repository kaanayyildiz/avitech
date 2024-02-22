import Map from "./Map";

export default function Content() {
  return (
    <>
      <div className="w-full mx-auto 2xl:max-w-[90rem] p-6 text-gray-900">
        <div className="p-5 mx-auto">
          <h1 className="text-sm">About Us</h1>
          <h2 className="font-bold text-2xl md:text-4xl ">
            With years of experience in the aviation industry, our company is a
            leading manufacturer of high-quality aircraft parts.
          </h2>
        </div>
        <div className="p-5">
          <div className="grid md:grid-cols-3 gap-8 md:gap-20 text-sm">
            <div className="flex flex-col ">
              <span className="text-gray-900">Who We Are</span>
              <p className="text-gray-500 pt-3 ">
                We continue our efforts to provide our valued customers with the
                best products and to be a reliable business partner in the
                aviation sector.
              </p>
            </div>
            <div>
              <span className="text-gray-900">Our Vision</span>
              <p className="text-gray-500 pt-3 ">
                To maintain our leadership position in the aviation industry by
                continuously innovating and developing cutting-edge solutions;
                to provide our customers with the highest quality products and
                become a reliable business partner by meeting their needs.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 mx-auto" id="contact-us">
          <h1 className="text-sm">Contact Us</h1>
          <h2 className="font-bold text-2xl md:text-4xl">
            Get in Touch with Us
          </h2>
          <p className="text-gray-500 pt-3">
            Whether you have inquiries, innovative ideas, or are poised to
            kickstart a project, our team is eager to connect with you. <br />{" "}
            Get in touch today, and let's begin transforming your vision into
            reality.
          </p>
        </div>
        <div className="google-map p-5">
          <Map />
        </div>
      </div>
      <div className="bottom-inf w-full bg-gray-100 mb-5">
        <div className="mx-auto 2xl:max-w-[90rem] p-12">
          <div className="grid grid-cols-2">
            <div className="text-2xl md:text-4xl">
              Avitech is always ready for your collaborations.
            </div>
            <div className="align-middle">
              <a href="mailto:info@avitechmetal.com">
                <span className="h-10 flex items-center justify-center uppercase font-semibold px-5 border border bg-black text-white hover:bg-white hover:text-black text-xs transition duration-500 ease-in-out">
                  Let's Talk
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
