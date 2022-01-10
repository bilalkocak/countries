import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import './Home.scss'
import Search from "../Search/Search";
import {fetchAll, searchCountry} from "../../service";

const Home = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        fetchAll()
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (search.length > 2) {
            searchCountry(search)
                .then(response => {
                    setCountries(response.data)
                })
                .catch(error => console.log(error))
        }
    }, [search])
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
                        return <Card country={country} key={country.name}/>
                    })
                }
            </div>
        </div>
    );
};


export default Home;
