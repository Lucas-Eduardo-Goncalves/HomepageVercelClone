import React from 'react';

import Logo from '../../assets/logo.svg';
import SpecialButton from '../../assets/special-button.svg';
import avatar from '../../assets/avatar.svg';

import { Container } from './styles';


export const Header: React.FC = () => {
  return (
    <Container>
        <h1>
          <img src={Logo} alt="Logo" />
        </h1>

        <nav>
          <ul>
            <li><a href="#link">Solutions</a></li>
            <li><a href="#link">Resources</a></li>
            <li><a href="#link">Pricing</a></li>
          </ul>
        </nav>

        <div>
          <a href="#link">
            <img src={SpecialButton} alt="Special Conference" />
            <span>Special Conf</span>
          </a>

          <img src={avatar} alt="Avatar" />
        </div>
    </Container>
  );
};