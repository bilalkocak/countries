import axios from "axios";
import {API_URL} from "./constant";

export const fetchDetail =(id)=>{
    return axios.get(`${API_URL}/callingcode/${id}`)
}

export const fetchAll = () => {
    return axios.get(`${API_URL}/all`)
}


export const searchCountry = (search) => {
    return axios.get(`${API_URL}/name/${search}`)
}
