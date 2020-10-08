import React from 'react';

import {useRouter} from 'next/router';
import {useAuth} from '../providers/auth';

const defaultLoadingFallback = () => {
  return <p>Loading ...</p>
}

const withAuthRedirect = ({
  WrappedComponent,
  LoadingComponent = defaultLoadingFallback,
  expectedAuth,
  location
}) => {
  const WithAuthRedirectWrapper = (props) => {
    const router = useRouter();
    const {isProcessing, isAuthenticated} = useAuth();

    if (isProcessing) {
      return <LoadingComponent />;
    }

    if (typeof window !== 'undefined' && expectedAuth !== isAuthenticated) {
      router.push(location);
      return <React.Fragment />;
    }

    /* eslint react/jsx-props-no-spreading: ["error", {"custom": "ignore"}] */
    return <WrappedComponent {...props} />;
  };
  return WithAuthRedirectWrapper;
};

export default withAuthRedirect;
