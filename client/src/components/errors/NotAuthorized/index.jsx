import React, { memo, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import NotAuthorized from '../../../assets/images/NotAuthorized.png';

const NotAuthorized = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Not Authorized | React Express App</title>
      </Helmet>
      <div className={`columns is-centered is-vcentered is-mobile`}>
        <div className={`column is-12`}>
          <img src={NotAuthorized} className={`not-authorized`} alt="Not Authorized" decoding="async" loading="lazy" importance="high" />
        </div>
      </div>
    </Fragment>
  )
}

export default memo(NotAuthorized);
