import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const menuAPI = {
  getMenu: () => api.get('/menu'),
}

export const orderAPI = {
  getAllOrders: () => api.get('/order'),
  getOrder: (id) => api.get(`/order/${id}`),
  createOrder: (orderData) => api.post('/order', orderData),
  updateOrder: (id, updateData) => api.put(`/order/${id}`, updateData),
  deleteOrder: (id) => api.delete(`/order/${id}`),
}

export default api