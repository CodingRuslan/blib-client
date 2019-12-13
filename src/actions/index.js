import BlibService from "../services/blib-service";

const blibServise = new BlibService();

export const changeParentPage = currentPage => ({
  type: "CHANGE_CURRENT_PARENT_PAGE",
  payload: currentPage
});

const productsRequested = () => ({
  type: "FETCH_PRODUCTS_REQUEST"
});

const productsLoaded = newProducts => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: newProducts
});

const productsError = error => ({
  type: "FETCH_PRODUCTS_FAILURE",
  payload: error
});

const registrationUser = data => ({
  type: "POST_USER_CREATE",
  payload: data
});

export const checkAuthenticationFromLocalStorage = () => ({
  type: "CHECK_AUTHENTICATION_FROM_LOCAL_STORAGE"
});

const correctLogin = (...args) => ({
  type: "POST_LOGIN_SUCCESS",
  payload: args
});

const wrongLogin = () => ({
  type: "POST_LOGIN_WRONG",
  payload: "Неправильный логин или пароль"
});

export const logOut = () => ({
  type: "FETCH_LOG_OUT"
});

const loginError = error => ({
  type: "POST_LOGIN_FAILURE",
  payload: error
});

const fetchLogin = (login, pass) => dispatch => {
  blibServise
    .logIn(login, pass)
    .then(e => {
      if (e.data[0].username) {
        dispatch(
          correctLogin(
            e.data[0].username,
            e.data[0].userid,
            e.data[0].libiduserside
          )
        );
      } else {
        dispatch(wrongLogin());
      }
    })
    .catch(err => dispatch(loginError(err)));
};

const fetchRegistration = (login, pass) => dispatch => {
  blibServise
    .registration(login, pass)
    .then(e => {
      dispatch(registrationUser(e.data[0]));
    })
    .catch(err => dispatch(loginError(err)));
};

const fetchProducts = libId => dispatch => {
  dispatch(productsRequested());
  blibServise
    .getProductsByLibId(libId)
    .then(e => dispatch(productsLoaded(e)))
    .catch(err => dispatch(productsError(err)));
};

export { fetchProducts, fetchLogin, fetchRegistration };
