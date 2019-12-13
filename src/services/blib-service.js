const axios = require("axios");

const _apiBase = "http://localhost:8080";

export default class BlibService {
  getProductsByLibId = async libId => {
    // args: libId
    try {
      // const response = await axios.get(`${_apiBase}"/library/showone/${libId}`);
      // return response.data

      return products;
    } catch (error) {
      console.error(error);
    }
  };

  logIn = async (username, pass) => {
    const res = await axios
      .post(`${_apiBase}/login/`, {
        username: username,
        pass: pass
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    return res;
    return [
      {
        userid: 7,
        username: "semen5",
        pass: "5",
        libiduserside: 259250
      }
    ];
  };

  registration = async (username, pass) => {
    const res = await axios
      .post(`${_apiBase}/registration/`, {
        username: username,
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
    fridge: true,
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
    fridge: false,
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
    fridge: false,
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
    fridge: true,
    tag1: "",
    tag2: "",
    tag3: ""
  },
  {
    productId: 5,
    libId: 1,
    title: "yellow banana",
    description: "It's very tasty banana",
    price: 12,
    stars: 4.75,
    parent: "Banana",
    fridge: true,
    tag1: "",
    tag2: "",
    tag3: ""
  }
];
