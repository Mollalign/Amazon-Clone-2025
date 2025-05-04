import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "https://amazon-clone-backend-88jz.onrender.com",
})


export {axiosInstance}