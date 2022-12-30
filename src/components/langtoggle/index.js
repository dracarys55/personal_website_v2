import React, { useEffect, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import "./style.css";
import { useTranslation } from "react-i18next";

const Langtoggle = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang"));

  const langtoggle = () => {
    setLang(lang === "zh-TW" ? "en" : "zh-TW");
    console.log(lang);
  };
  useEffect(() => {
    if (lang !== null) i18n.changeLanguage(lang);
  }, [lang, i18n]);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  return (
    <div className='nav_ac thementoggle-button' onClick={langtoggle}>
      <IoLanguage />
    </div>
  );
};

export default Langtoggle;
