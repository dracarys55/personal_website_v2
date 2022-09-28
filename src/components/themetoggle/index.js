import React, { useEffect, useState } from 'react';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';
import './style.css';

//toggle icon 顏色變化的原因是他去吃 dat-theme 設定的 那些顏色設定，所以不用自己改
const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem('theme'));
  const themetoggle = () => {
    settheme(theme === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className='nav_ac thementoggle-button' onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
