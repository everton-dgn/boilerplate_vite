import axios from 'axios'

const baseURL = import.meta.env.VITE_PUBLIC_API_BASE_URL

export const httpClientAdapter = axios.create({ baseURL })
