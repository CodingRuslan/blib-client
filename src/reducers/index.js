const initialState = {
  isAuth: false,
  loginName: "",
  userId: "",
  libId: "",
  products: [],
  loading: true,
  error: null,
  currentParentPage: "main"
  // messageForModalWindow: ""
};

const checkAuth = state => {
  const id = localStorage.getItem("userId");
  const login = localStorage.getItem("loginName");
  if (login && id) {
    return {
      ...state,
      loginName: login,
      userId: id,
      isAuth: true
    };
  }
  return state;
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

    case "POST_USER_CREATE":
      return {
        ...state,
        messageForModalWindow: action.payload
      };

    case "POST_LOGIN_SUCCESS":
      localStorage.setItem("userId", action.payload[1]);
      localStorage.setItem("loginName", action.payload[0]);
      return {
        ...state,
        loginName: action.payload[0],
        userId: `${action.payload[1]}`,
        libId: action.payload[2],
        isAuth: true,
        messageForModalWindow: "Теперь вы можете использовать свою библиотеку",
        loading: false,
        error: null
      };

    case "CHECK_AUTHENTICATION_FROM_LOCAL_STORAGE":
      return checkAuth(state);

    case "POST_LOGIN_FAILURE":
      return {
        ...state,
        loginName: "",
        isAuth: false,
        loading: false,
        error: action.payload
      };

    case "POST_LOGIN_WRONG":
      return {
        ...state,
        messageForModalWindow: action.payload
      };

    case "FETCH_LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        loginName: "",
        isAuth: false
      };

    case "CHANGE_CURRENT_PARENT_PAGE":
      return {
        ...state,
        currentParentPage: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
