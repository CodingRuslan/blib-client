const initialState = {
  isAuth: false,
  products: [],
  loading: true,
  error: null,
  messageForModalWindow: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        ingredients: [],
        loading: true,
        error: null
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
