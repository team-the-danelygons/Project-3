import axios from "axios";

export default {
  // Gets all biz
  getBizAll: function() {
    return axios.get("/api/business");
  },
  // Gets the biz with the given id
  getBiz: function(id) {
    return axios.get("/api/business/" + id);
  },
  // Deletes the biz with the given id
  deleteBiz: function(id) {
    return axios.delete("/api/business/" + id);
  },
  // Saves a biz to the database
  saveBiz: function(bizData) {
    return axios.post("/api/business", bizData);
  }
};
