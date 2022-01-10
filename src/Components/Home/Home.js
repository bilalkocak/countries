import React, {useEffect, useState} from 'react';

import Card from "../Card/Card";
import Search from "../Search/Search";
import CustomSelect from "../CustomSelect/CustomSelect";

import {CONTINENT} from "../../constant";
import {fetchAll, filterByContinent, searchCountry} from "../../service";

import './Home.scss'

const Home = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const [continent, setContinent] = useState(CONTINENT[0])

    useEffect(() => {
        _fetchAll();
    }, [])


    const _fetchAll = () => {
        fetchAll()
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => console.log(error))
    }


    const handleChangeSearch = (value) => {
        if (value.length === 0) {
            _fetchAll();
            setSearch(value)
        } else {
            setSearch(value)
            setContinent(CONTINENT[0]);
            searchCountry(value)
                .then(response => {
                    if (response.data.status !== 404) {
                        setCountries(response.data)
                    } else setCountries([])
                })
                .catch(error => console.log(error))
        }
    }

    const _fetchFiltered = (_continent) => {
        if (_continent.value === CONTINENT[0].value) {
            _fetchAll();
            return;
        }
        filterByContinent(_continent.value)
            .then(response => {
                setContinent(_continent)
                setCountries(response.data)
                setSearch("")
            })
            .catch(error => console.log(error))
    }


    return (
        <div className={'home-container'}>
            <div className={'home-filter'}>
                <Search onChange={handleChangeSearch} value={search}/>
                <div className={'home-select'}>
                    <CustomSelect placeholder={'Filter by Region'}
                                  options={CONTINENT}
                                  selectedOption={continent}
                                  handleChange={e => _fetchFiltered(e)}/>
                </div>
            </div>
            <div className={'cards'}>
                {
                    countries.length > 0 ?
                        countries.map(country => {
                            return <Card country={country} key={country.name}/>
                        }) :
                        <div>
                            Country not found
                        </div>
                }
            </div>
        </div>
    );
};


export default Home;
