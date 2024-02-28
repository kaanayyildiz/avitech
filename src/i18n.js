import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      heroStateYour: "State Your",
      heroDream: "Dream",
      heroDesign: "Design",
      heroInspiration: "Inspiration",
      heroFuture: "Future",
      heroToBuildAFuture: "to build a future.",
      heroDesc:
        "Our company operates with a vision aiming for excellence in the manufacturing of aircraft components. By embracing customer satisfaction as a fundamental principle, we aim to become a reliable and quality symbol in the aviation industry.",
      contentAboutUsTitle: "About Us",
      contentWhoWeAreTitle: "Who We Are",
      contentOurVisionTitle: "Our Vision",
      contentAboutUs:
        "With years of experience in the aviation industry, our company is a leading manufacturer of high-quality aircraft parts.",
      contentWhoWeAre:
        "We continue our efforts to provide our valued customers with the best products and to be a reliable business partner in the aviation sector.",
      contentOurVision:
        "To maintain our leadership position in the aviation industry by continuously innovating and developing cutting-edge solutions to provide our customers with the highest quality products and become a reliable business partner by meeting their needs.",
      contentLetsTalkHead: "Avitech is always ready for your collaborations.",
      contentContactUsHead: "Contact Us",
      contentContactUsTitle: "Get in Touch with Us",
      contentContactUsText:
        "Whether you have inquiries, innovative ideas, or are poised to kickstart a project, our team is eager to connect with you. Get in touch today, and lets begin transforming your vision into reality.",
      footerLocation: "Location",
      footerOurAdress: "Our Adress",
      footerHoursTitle: "Hours",
      Monday: "Monday",
      Friday: "Friday",
      EightAm: "8 am",
      SixPm: "6 pm",
      Saturday: "Saturday",
      Closed: "Closed",
      Sunday: "Sunday",
      formFullName:'Full Name',
      formMailAdress: 'E-Mail Address',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Submit',
      contentLetsTalk: 'Lets Talk',
      InputFullName: 'Full Name',
      InputEmail: 'example@domain.com',
      InputSubject: 'Subject',
      InputMessage: 'Message',
    },
  },
  de: {
    translation: {
      heroStateYour: "Beschreiben Sie Ihr",
      heroDream: "Traum",
      heroDesign: "Design",
      heroInspiration: "Inspiration",
      heroFuture: "Zukunft",
      heroToBuildAFuture: "um die Zukunft aufzubauen.",
      heroDesc:
        "Unser Unternehmen operiert mit einer Vision, die auf Exzellenz in der Herstellung von Flugzeugkomponenten abzielt. Indem wir Kundenzufriedenheit als grundlegendes Prinzip annehmen, streben wir danach, ein verlässliches und qualitätsvolles Symbol in der Luftfahrtindustrie zu werden.",
      contentAboutUsTitle: "Über uns",
      contentWhoWeAreTitle: "Wer wir sind",
      contentOurVisionTitle: "Unsere Vision",
      contentAboutUs:
        "Mit jahrelanger Erfahrung in der Luftfahrtindustrie ist unser Unternehmen ein führender Hersteller hochwertiger Flugzeugteile.",
      contentWhoWeAre:
        "Wir setzen unsere Bemühungen fort, unseren geschätzten Kunden die besten Produkte anzubieten und ein zuverlässiger Geschäftspartner im Luftfahrtsektor zu sein.",
      contentOurVision:
        "Um unsere Führungsposition in der Luftfahrtindustrie zu erhalten, indem wir kontinuierlich innovative und modernste Lösungen entwickeln; unseren Kunden die höchste Qualität an Produkten anzubieten und ein zuverlässiger Geschäftspartner zu werden, indem wir ihren Bedürfnissen gerecht werden.",
      contentLetsTalkHead: "Avitech ist immer bereit für Ihre Zusammenarbeit.",
      contentContactUsHead: "Kontaktieren Sie uns",
      contentContactUsTitle: "Treten Sie mit uns in Kontakt",
      contentContactUsText:
        "Ob Sie Anfragen haben, innovative Ideen oder bereit sind, ein Projekt anzustoßen, unser Team ist darauf bedacht, mit Ihnen in Verbindung zu treten. Treten Sie heute mit uns in Kontakt, und lassen Sie uns beginnen, Ihre Vision in die Realität umzusetzen.",
      footerLocation: "Standort",
      footerOurAdress: "Unsere Adresse",
      footerHoursTitle: "Arbeitszeiten",
      Monday: "Montag ",
      Friday: "Freitag",
      EightAm: "8 Uhr morgens",
      SixPm: "18 Uhr abends",
      Saturday: "Samstag",
      Closed: "Geschlossen",
      Sunday: "Sonntag",
      formFullName:'Vollständiger Name',
      formMailAdress: 'E-Mail-Adresse',
      formSubject: 'Betreff',
      formMessage: 'Nachricht',
      formSubmit: 'Absenden',
      contentLetsTalk: 'Lasst uns reden',
      InputFullName: 'Vollständiger Name',
      InputEmail: 'Beispiel@domain.com',
      InputSubject: 'Betreff',
      InputMessage: 'Nachricht',
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;
