import request from "../utils/request";

class API {
  static getlist = (params = {}) => request.get("/topics", { params });

  static getTopic = (id) => request.get("/topic/" + id);
}

export default API;
