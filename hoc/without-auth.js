import withAuthRedirect from './with-auth-redirect';

const withoutAuth = (WrappedComponent, location = '/' ) => {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: false
  })
};

export default withoutAuth;
