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
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>

        <div>
          <a>
            <img src={SpecialButton} alt="Special Conference" />
            <span>Special Conf</span>
          </a>

          <img src={avatar} alt="Avatar" />
        </div>
    </Container>
  );
};