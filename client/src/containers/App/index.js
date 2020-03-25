import React, { Fragment } from 'react';
import './App.css';
import Routes from '../../routes';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

function App() {
  return (
    <Fragment>
      <Header />
        <main>
          <Routes />
        </main>
      <Footer />
    </Fragment>
  );
}

export default App;
