import Map from "./Map";
import { HiEnvelope, HiMapPin, HiMiniPhone } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import Arrow from "../assets/arrow.svg";
import Skeleton from "./Skeleton2";
import { useState } from "react";
import { useEffect } from "react";


export default function Content() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate data fetching delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const { t, i18n } = useTranslation();

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };
  return (
    <>
      <div>
        {loading ? (
          <Skeleton />
        ) : (
          <div>
            {" "}
            <div className="w-full mx-auto 2xl:max-w-[90rem] p-6 text-gray-900">
              <div className="p-5 mx-auto">
                <h1 className="text-sm">{t("contentAboutUsTitle")}</h1>
                <h2 className="font-bold text-2xl md:text-4xl ">
                  {t("contentAboutUs")}
                </h2>
              </div>
              <div className="p-5">
                <div className="grid md:grid-cols-3 gap-8 md:gap-20 text-sm">
                  <div className="flex flex-col ">
                    <span className="text-gray-900">
                      {t("contentWhoWeAreTitle")}
                    </span>
                    <p className="text-gray-500 pt-3 ">
                      {t("contentWhoWeAre")}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-900">
                      {t("contentOurVisionTitle")}
                    </span>
                    <p className="text-gray-500 pt-3 ">
                      {t("contentOurVision")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-inf w-full bg-gray-100">
              <div className="mx-auto 2xl:max-w-[90rem] p-12">
                <div className="grid md:grid-cols-2 gap-y-5 md:gap-0">
                  <div className="text-2xl md:text-4xl">
                    {t("contentLetsTalkHead")}
                  </div>
                  <div className="align-middle">
                    <a href="mailto:info@avitechmetal.com">
                      <span className="h-10 flex items-center justify-center uppercase font-semibold px-5 border bg-black text-white hover:bg-white hover:text-black text-xs transition duration-500 ease-in-out">
                        {t("contentLetsTalk")}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto 2xl:max-w-[90rem] p-6 text-gray-900">
              <div
                className="p-5 mx-auto md:grid md:grid-cols-2"
                id="contact-us"
              >
                <div className="">
                  <h1 className="text-sm">{t("contentContactUsTitle")}</h1>
                  <h2 className="font-bold text-2xl md:text-4xl">
                    {t("contentContactUsHead")}
                  </h2>
                  <p className="text-gray-500 pt-3 text-sm">
                    {t("contentContactUsText")}
                  </p>
                </div>
                <div className="md:flex items-center justify-end pr-24 pt-5 md:pt-0">
                  <a href="https://www.linkedin.com/company/avitech-metal/">
                    <button className="h-10 flex items-center font-semibold rounded-lg gap-x-4 p-5 border text-[#007EBB] hover:bg-[#007EBB] hover:text-white text-md transition duration-500 ease-in-out">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 72 72"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                            fill="#007EBB"
                          />
                          <path
                            d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                      <span className="font-semibold">Linkedin</span>
                    </button>
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-3 p-5">
                <div className="text-lg md:text-3xl flex items-center gap-2 pb-5 md:p-0">
                  <HiMapPin />
                  <a href="https://www.google.com/maps?ll=41.09325,29.09603&z=15&t=m&hl=en&gl=US&mapclient=embed&q=41%C2%B005%2735.7%22N+29%C2%B005%2745.7%22E+41.093250,+29.096030@41.09325,29.09603">
                    Istanbul, Turkey
                  </a>
                </div>
                <div className="text-lg md:text-3xl flex items-center gap-2 pb-5 md:p-0">
                  <HiMiniPhone />
                  <a href="tel:+902164250325">{"+90 (216) 425 03 25"}</a>
                </div>
                <div className="text-lg md:text-3xl flex items-center gap-2 pb-5 md:p-0 flex-row">
                  <HiEnvelope />
                  <a href="mailto:info@avitechmetal.com">
                    info@avitechmetal.com
                  </a>
                </div>
              </div>
              <div className="p-5">
                <form action="/" method="GET">
                  <div class="mb-5">
                    <label
                      for="name"
                      class="mb-3 block text-base font-medium text-black"
                    >
                      {t("formFullName")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={t("InputFullName")}
                      autoComplete="off"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md transition duration-500"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="email"
                      class="mb-3 block text-base font-medium text-black"
                    >
                      {t("formMailAdress")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t("InputEmail")}
                      autoComplete="off"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md transition duration-500"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="subject"
                      class="mb-3 block text-base font-medium text-black"
                    >
                      {t("formSubject")}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder={t("InputSubject")}
                      autoComplete="off"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md transition duration-500"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="message"
                      class="mb-3 block text-base font-medium text-black"
                    >
                      {t("formMessage")}
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder={t("InputMessage")}
                      autoComplete="off"
                      class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md transition duration-500"
                    ></textarea>
                  </div>
                  <div>
                    <button class="hover:shadow-form uppercase py-3 px-8 font-semibold px-5 border border bg-black text-white hover:bg-white hover:text-black text-xs transition duration-500 ease-in-out outline-none">
                      {t("formSubmit")}
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
          </div>
        )}
      </div>
    </>
  );
}
