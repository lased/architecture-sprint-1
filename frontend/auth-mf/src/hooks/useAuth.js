import * as auth from '../utils/auth';

export const useAuth = ({
  onCheckToken,
  onRegisterSuccess,
  onRegisterFailed,
  onLoginSuccess,
  onLoginFailed,
}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function checkToken() {
    const token = localStorage.getItem('jwt');

    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          onCheckToken(res.data);
        })
        .catch((err) => {
          localStorage.removeItem('jwt');
          console.log(err);
        });
    }
  }

  function handleRegister({ email, password }) {
    auth
      .register(email, password)
      .then((res) => {
        onRegisterSuccess(res.data);
      })
      .catch((err) => {
        onRegisterFailed(err);
      });
  }

  function handleLogin({ email, password }) {
    auth
      .login(email, password)
      .then((res) => {
        onLoginSuccess(res.data);
      })
      .catch((err) => {
        onLoginFailed(err);
      });
  }

  function handleLogout() {
    // при вызове обработчика onSignOut происходит удаление jwt
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    // После успешного вызова обработчика onSignOut происходит редирект на /signin
    history.push('/signin');
  }

  return {
    setIsLoggedIn,
    isLoggedIn,
    checkToken,
    handleRegister,
    handleLogin,
    handleLogout,
  };
};
