import React from 'react';
import './Card.scss'
import { useNavigate } from "react-router-dom";

const Card = ({country}) => {
    let navigate = useNavigate();

    function handleClick() {
        navigate(`/${country.callingCodes[0]}`);
    }
    return (
        <div className={'country-card'} onClick={handleClick}>
            <div className={'country-card-flag'} style={{backgroundImage: `url(${country.flags.svg})`}}/>
            <div className={'country-card-info'}>
                <div className={'name'}>{country.name}</div>
                <div>
                    <div><span className={'infoTitle'}>Population:</span><span>{country.population}</span></div>
                    <div><span className={'infoTitle'}>Region:</span><span>{country.region}</span></div>
                    <div><span className={'infoTitle'}>Capital:</span><span>{country.capital}</span></div>
                </div>
            </div>
        </div>
    );
};


export default Card;
