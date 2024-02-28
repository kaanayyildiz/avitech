import { useTranslation } from "react-i18next";

export default function Map() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="rounded-lg overflow-hidden">
          <h2 className="text-2xl font-semibold pb-5">{t('footerLocation')}</h2>
          <iframe
            className="border border-gray-300 rounded-md"
            width="100%"
            height={150}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=41.09325,%2029.09603+(Avitech%20Metal)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          >
            &lt;a href="https://www.gps.ie/"&gt;gps vehicle tracker&lt;/a&gt;
          </iframe>
        </div>
        <div>
          <div class="max-w-full mx-auto rounded-lg overflow-hidden">
            <div class="px-6 py-4">
              <h3 class="text-lg font-medium text-gray-900">{t('footerOurAdress')}</h3>
              <p class="mt-1 text-gray-600">
                Rüzgarlıbahçe, K Plaza 34805 Beykoz/İstanbul, Türkiye
              </p>
            </div>
            <div class="border-t border-gray-200 px-6 py-4">
              <h3 class="text-lg font-medium text-gray-900">{t('footerHoursTitle')}</h3>
              <p class="mt-1 text-gray-600">{t('Monday')} - {t('Friday')}: {t('EightAm')} - {t('SixPm')}</p>
              <p class="mt-1 text-gray-600">{t('Saturday')}: {t('Closed')}</p>
              <p class="mt-1 text-gray-600">{t('Sunday')}: {t('Closed')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
