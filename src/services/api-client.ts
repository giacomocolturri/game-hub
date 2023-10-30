import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d7156b85c98349eab01792b1fb2f66a3",
  },
});
