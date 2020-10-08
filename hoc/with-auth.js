import withAuthRedirect from './with-auth-redirect';

const withAuth = (WrappedComponent, location = '/login') => {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: true
  });
};

export default withAuth;
