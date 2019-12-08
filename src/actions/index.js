import BlibService from "../services/blib-service";

const blibServise = new BlibService();

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

const fetchProducts = () => dispatch => {
  dispatch(productsRequested());
  blibServise
    .getProductsByLibId()
    .then(e => dispatch(productsLoaded(e)))
    .catch(err => dispatch(productsError(err)));
};

export { fetchProducts };
