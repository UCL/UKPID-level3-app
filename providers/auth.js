import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {getRequest} from '../requests/http-calls';

const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: () => {}
});

const AuthProvider = ({children}) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isProcessing, setProcessing] = useState(true);
  useEffect(() => {
    getRequest("/rest/auth/verify")
      .then(res => {
        setAuthenticated(!res.error);
        setProcessing(false);
      });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isProcessing,
        setAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("useAuth not used within AuthProvider");
  }
  return ctx;
};

const useIsAuthenticated = () => {
  const ctx = useAuth();
  return ctx.isAuthenticated;
};

export {AuthProvider, useAuth, useIsAuthenticated};
