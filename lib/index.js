import axios from "axios";

class StockPymes {
  constructor(url) {
    this.url = url;
  }

  products() {
    return new ProductOption(this);
  }

  clients() {
    return new ClientOption(this);
  }
}

class ClientOption {
  constructor(api) {
    this.api = api;
  }

  getClients() {
    let clients = [];
    let urlRequester = String(this.api.url);
    urlRequester = urlRequester.endsWith("/")
      ? urlRequester + "clients"
      : urlRequester + "/clients";
    axios.get(urlRequester).then((response) => {
      console.log(response.data);
      //do something
    });
    return clients;
  }
}

class ProductOption {
  constructor(api) {
    this.api = api;
  }

  getProducts() {
    let products = [];
    let urlRequester = String(this.api.url);
    urlRequester = urlRequester.endsWith("/")
      ? urlRequester + "products"
      : urlRequester + "/products";
    axios.get(urlRequester).then((response) => {
      console.log(response.data);
      //do something
    });
    return products;
  }
}

export default function stockpymes(url) {
  return new StockPymes(url);
}
