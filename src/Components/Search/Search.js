import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss'
import {SearchSvgrepoCom} from "../Icons";

const Search = ({onChange,value}) => {
    return (
        <div className="search">
            <SearchSvgrepoCom/>
            <input type="text"
                   placeholder={'Search for a country...'}
                   onChange={(e) => onChange(e.target.value)}
                   value={value}/>
        </div>
    );
};

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Search;
