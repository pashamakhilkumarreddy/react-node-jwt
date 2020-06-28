import React, { Fragment } from 'react';
import Routes from '../../routes';
import AppHeader from '../../components/common/Header';
import AppFooter from '../../components/common/Footer/';

function App() {
  return (
    <Fragment>
      <AppHeader />
        <main className="container mt-6">
          <Routes />
        </main>
      <AppFooter />
    </Fragment>
  );
}

export default App;
