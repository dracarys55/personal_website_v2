import React from 'react';
import './style.css';
import {
  FaGithub,
  FaMedium,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from 'react-icons/fa';
import { socialprofils } from '../../content_option';

export const Socialicons = (params) => {
  return (
    <div className='stick_follow_icon'>
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.medium && (
          <li>
            <a href={socialprofils.medium}>
              <FaMedium />
            </a>
          </li>
        )}

        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.youtube}>
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
