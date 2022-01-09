import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../Card/Card";
import {API_URL} from "../../constant";
import './Home.scss'
import Search from "../Search/Search";

const Home = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}/all`).then(function (response) {
            setCountries(response.data)
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <div className={'home-container'}>
            <div className={'home-filter'}>
                <Search onChange={setSearch} value={search}/>
                <div className={'home-select'}>

                </div>
            </div>
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
