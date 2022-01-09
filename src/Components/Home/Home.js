import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../Card/Card";
import {API_URL} from "../../constant";
import './Home.scss'

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}/all`).then(function (response) {
            setCountries(response.data)
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <div className={'homeContainer'}>
            <div className={'cards'}>
                {
                    countries.map(country => {
                        return <Card country={country} key={country.name.common}/>
                    })
                }
            </div>
        </div>
    );
};


export default Home;
