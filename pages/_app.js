import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from '../providers/auth';

/* eslint react/jsx-props-no-spreading: ["error", {"custom": "ignore"}] */
const Level3App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

Level3App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.node.isRequired
};

export default Level3App;
