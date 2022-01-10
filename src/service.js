import axios from "axios";
import {API_URL} from "./constant";

export const fetchDetail =(code)=>{
    return axios.get(`${API_URL}/alpha?codes=${code}`)
}

export const fetchAll = () => {
    return axios.get(`${API_URL}/all`)
}


export const searchCountry = (search) => {
    return axios.get(`${API_URL}/name/${search}`)
}

export const filterByContinent = (continent) => {
    return axios.get(`${API_URL}/region/${continent}`)
}
