import React, { memo, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import NotFoundImage from '../../../assets/images/NotFound.gif';

const NotFound = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className={`columns is-centered is-vcentered is-mobile`}>
        <div className={`column is-12`}>
          <img src={NotFoundImage} className={`not-found`} alt="Not Found" decoding="async" loading="lazy" importance="high" />
        </div>
      </div>
    </Fragment>
  )
}

export default memo(NotFound);
