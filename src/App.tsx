import React from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import GlobalStyles from './styles/GlobalStyles';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <div className="central">
        <Header />
        <Main />
        <Footer />
      </div>

    </>
  );
};