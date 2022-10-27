import axios from "axios";

const apiEmail = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export default apiEmail;
