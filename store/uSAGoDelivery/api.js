import axios from "axios"
const uSAGoDelivery = axios.create({
  baseURL: "https://www.usa2go.org",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
