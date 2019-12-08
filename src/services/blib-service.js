const axios = require("axios");

const _apiBase = "http://localhost:8080";

export default class BlibService {
  getProductsByLibId = async () => {
    // args: libId
    try {
      // const response = await axios.get(`${_apiBase}/librares/${libId}`);
      // return response.data.map(this._transformIngredients);

      return products;
    } catch (error) {
      console.error(error);
    }
  };

  logIn = async (login, pass) => {
    const res = await axios
      .post(`${_apiBase}/login/`, {
        login: login,
        pass: pass
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    return res;
  };

  registration = async (login, pass) => {
    const res = await axios
      .post(`${_apiBase}/registration/`, {
        login: login,
        pass: pass
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    return res;
  };
}

const products = [
  {
    productId: 1,
    libId: 1,
    title: "Banana",
    description: "It's very tasty banana",
    price: 12,
    stars: 4.75,
    parent: "main",
    tag1: "",
    tag2: "",
    tag3: ""
  },
  {
    productId: 2,
    libId: 1,
    title: "Potato",
    description: "It's very tasty banana",
    price: 12,
    stars: 4.75,
    parent: "main",
    tag1: "",
    tag2: "",
    tag3: ""
  },
  {
    productId: 3,
    libId: 1,
    title: "Tomato",
    description: "It's very tasty banana",
    price: 12,
    stars: 4.75,
    parent: "main",
    tag1: "",
    tag2: "",
    tag3: ""
  },
  {
    productId: 4,
    libId: 1,
    title: "Tomato",
    description: "It's very tasty banana",
    price: 12,
    stars: 4.75,
    parent: "main",
    tag1: "",
    tag2: "",
    tag3: ""
  }
];
