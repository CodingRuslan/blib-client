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
}

const products = [
  {
    productId: 1,
    title: "Banana",
    shortDiscription: "It's very tasty banana",
    stars: 4.75
  },
  {
    productId: 2,
    title: "Potato",
    shortDiscription: "It's hole, not patato",
    stars: 1.5
  }
];
