import Map from "./Map";
import { HiEnvelope, HiMapPin, HiMiniPhone } from "react-icons/hi2";

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
      </div>
      <div className="bottom-inf w-full bg-gray-100 mb-5">
        <div className="mx-auto 2xl:max-w-[90rem] p-12">
          <div className="grid md:grid-cols-2 gap-y-5 md:gap-0">
            <div className="text-2xl md:text-4xl">
              Avitech is always ready for your collaborations.
            </div>
            <div className="align-middle">
              <a href="mailto:info@avitechmetal.com">
                <span className="h-10 flex items-center justify-center uppercase font-semibold px-5 border bg-black text-white hover:bg-white hover:text-black text-xs transition duration-500 ease-in-out">
                  Let's Talk
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto 2xl:max-w-[90rem] p-6 text-gray-900">
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
        <div className="grid md:grid-cols-3 p-5">
          <div className="text-2xl md:text-3xl flex items-center gap-2 pb-5 md:p-0">
            <HiMapPin />
            <a href="https://www.google.com/maps?ll=41.09325,29.09603&z=15&t=m&hl=en&gl=US&mapclient=embed&q=41%C2%B005%2735.7%22N+29%C2%B005%2745.7%22E+41.093250,+29.096030@41.09325,29.09603">
              Istanbul, Turkey
            </a>
          </div>
          <div className="text-2xl md:text-3xl flex items-center gap-2 pb-5 md:p-0">
            <HiMiniPhone />
            <a href="tel:+902164250325">{"+90 (216) 425 03 25"}</a>
          </div>
          <div className="text-2xl md:text-3xl flex items-center gap-2 pb-5 md:p-0">
            <HiEnvelope />
            <a href="mailto:info@avitechmetal.com">info@avitechmetal.com</a>
          </div>
        </div>
        <div className="p-5">
          <form action="#" method="post">
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-black"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                autoComplete="off"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md transition duration-500"
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                autoComplete="off"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md transition duration-500"
              />
            </div>
            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-black"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                autoComplete="off"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md transition duration-500"
              />
            </div>
            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-medium text-black"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                autoComplete="off"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md transition duration-500"
              ></textarea>
            </div>
            <div>
              <button class="hover:shadow-form uppercase py-3 px-8 font-semibold px-5 border border bg-black text-white hover:bg-white hover:text-black text-xs transition duration-500 ease-in-out outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
        
      </div>
      <div className="w-full bg-gray-100">
        <div className="mx-auto 2xl:max-w-[90rem] p-5">
          <Map />
        </div>
      </div>
    </>
  );
}
