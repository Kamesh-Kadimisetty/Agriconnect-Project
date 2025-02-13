// import { useTranslation } from "react-i18next";

export const handleChangeLang = (i18n, lang) => {
  // const [t, i18n] = useTranslation("global");
  i18n.changeLanguage(lang);
};
