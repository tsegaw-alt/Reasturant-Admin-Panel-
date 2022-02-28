import axios from "axios"
import { getApiConfig } from "./apiConfig"

export const get = (url) => {
        const config = getApiConfig()
          return axios.get(url,config)
      }
      
export const  post = (url,data) => {
        const config = getApiConfig();
        return axios.post(url,data,config)
      }