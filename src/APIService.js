const PRODUCTS_REST_API = "http://localhost:9191/api/products";

class APIService {
  getProducts() {
    return fetch(PRODUCTS_REST_API, {
      method: "get",
    }).then((res) => res.json());
  }
}

export default new APIService();
