import React from 'react';
import PropTypes from 'prop-types';

const FormLayout = ({ children }) => {
  return (
    <div className={`columns is-centered is-vcentered is-mobile`}>
      <div className={`column is-10-mobile is-5-widescreen is-7-desktop is-7-tablet`}>
        {
          children
        }
      </div>
    </div>
  )
}

FormLayout.propTypes = {
  children: PropTypes.node,
}

export default FormLayout;
