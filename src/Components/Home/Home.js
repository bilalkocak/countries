import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import './Home.scss'
import Search from "../Search/Search";
import {fetchAll, filterByContinent, searchCountry} from "../../service";
import CustomSelect from "../CustomSelect/CustomSelect";
import {CONTINENT} from "../../constant";

const Home = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const [continent, setContinent] = useState(CONTINENT[0])

    useEffect(() => {
        _fetchAll();
    }, [])

    useEffect(() => {
        search.length > 2 ? _search() : _fetchAll();
    }, [search])

    useEffect(() => {
        continent.value ? _fetchFiltered() : _fetchAll();
    }, [continent])

    const _fetchAll = () => {
        fetchAll()
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => console.log(error))
    }

    const _fetchFiltered = () => {
        filterByContinent(continent.value)
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => console.log(error))
    }

    const _search = () => {
        searchCountry(search)
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className={'home-container'}>
            <div className={'home-filter'}>
                <Search onChange={setSearch} value={search}/>
                <div className={'home-select'}>
                    <CustomSelect placeholder={'Filter by Region'}
                                  options={CONTINENT}
                                  selectedOption={continent}
                                  handleChange={e => setContinent(e)}/>
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
