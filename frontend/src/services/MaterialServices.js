import requests from './httpService';

const MaterialServices = {
  getAllMaterials() {
    return requests.get('/materials');
  },

  getStockOutProducts() {
    return requests.get('/materials/stock-out');
  },

  getMaterialById(id) {
    return requests.get(`/materials/${id}`);
  },

  addMaterial(body) {
    return requests.post('/materials/add', body);
  },

  addAllMaterials(body) {
    return requests.post('/materials/all', body);
  },

  updateMaterial(id, body) {
    return requests.put(`/materials/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/materials/status/${id}`, body);
  },

  deleteMaterial(id) {
    return requests.delete(`/materials/${id}`);
  },
};

export default MaterialServices;
