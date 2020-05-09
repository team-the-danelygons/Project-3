import axios from "axios";

export default {
  // Gets all biz
  getBizAll: function () {
    return axios.get("/api/business");
  },
  // Gets the biz with the given id
  getBiz: function (id) {
    return axios.get("/api/business/" + id);
  },

  getBizSearch: function (name) {
    return axios.get("/api/business/name/" + name);
  },

  updateBiz: function (id, update) {
    return axios.put("/api/business/" + id, update);
  },
  // Deletes the biz with the given id
  deleteBiz: function (id) {
    return axios.delete("/api/business/" + id);
  },
  // Saves a biz to the database
  saveBiz: function (bizData) {
    return axios.post("/api/business", bizData);
  },

  getPlaces: function () {
    return axios.get("/api/places");
  }

};
