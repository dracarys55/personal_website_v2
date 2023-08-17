import React, { useState } from 'react';
import './style.css';
import { VscGrabber, VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { logotext } from '../content_option';
import Themetoggle from '../components/themetoggle';
import { useTranslation } from 'react-i18next';
import Langtoggle from '../components/langtoggle';

const Headermain = () => {
  const [isActive, setActive] = useState('true');
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  console.log(i18n.language);
  const handleToggle = () => {
    setActive(!isActive);
    /* document.body.classList.toggle('ovhidden'); */
  };

  return (
    <>
      <header className='fixed-top site__header'>
        <div className='d-flex align-items-center justify-content-between nav_ac_header'>
          <Link className='navbar-brand nav_ac' to='/'>
            {logotext}
          </Link>
          {!isActive ? null : (
            <div className='d-flex align-items-center mid-navbar-rwd '>
              <ul className='d-flex  flex-row align-items-center m-0 py-1'>
                <li className='menu__button nav_ac'>
                  <Link to='/home' className=''>
                    {t('header.home')}
                  </Link>
                </li>
                <li className='menu__button  nav_ac'>
                  <Link to='/projects' className=''>
                    {t('header.projects')}
                  </Link>
                </li>
                <li className='menu__button  nav_ac'>
                  <Link to='/about' className=''>
                    {t('header.about')}
                  </Link>
                </li>
                <li className='menu__button  nav_ac'>
                  <Link to='/contact' className=''>
                    {t('header.contact')}
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className='d-flex align-items-center'>
            <Langtoggle />
            <Themetoggle />
            <button
              className='menu__button nav_ac navigation_toggle'
              onClick={handleToggle}
            >
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? 'menu__opend' : ''}`}>
          <div className='bg__menu h-100'>
            <div className='menu__wrapper'>
              <div className='menu__container p-3'>
                <ul className='the_menu'>
                  <li className='menu_item '>
                    <Link onClick={handleToggle} to='/' className='my-3'>
                      {t('header.home')}
                    </Link>
                  </li>
                  <li className='menu_item'>
                    <Link
                      onClick={handleToggle}
                      to='/projects'
                      className='my-3'
                    >
                      {t('header.projects')}
                    </Link>
                  </li>
                  <li className='menu_item'>
                    <Link onClick={handleToggle} to='/about' className='my-3'>
                      {t('header.about')}
                    </Link>
                  </li>
                  <li className='menu_item'>
                    <Link onClick={handleToggle} to='/contact' className='my-3'>
                      {t('header.contact')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3'>
            <div className='d-flex'>
              <p className='nav_ac'>Why don't you go for it ?</p>
            </div>
          </div>
        </div>
      </header>
      <div className='br-top'></div>
      <div className='br-bottom'></div>
      <div className='br-left'></div>
      <div className='br-right'></div>
    </>
  );
};

export default Headermain;
