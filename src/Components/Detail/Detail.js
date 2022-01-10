import React, {useEffect, useState} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import './Detail.scss';
import {numberWithCommas} from "../../helper";
import Chip from "../Chip/Chip";
import {ArrowBack} from "../Icons";
import {fetchDetail} from "../../service";

const Detail = () => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        fetchDetail(params.id).then(res => {
            setState(res.data[0])
        }).catch(err => console.log(err)).then(() => setLoading(false))
    }, [params.id])
    const goBack = () => {
        navigate('/')
    }
    return (
        <div className={'detail-container'}>
            <div className={'button-area'}>
                <div className={'button'} onClick={()=>goBack()}><ArrowBack/> Back</div>
            </div>
            {
                !loading && <div className={'detail-content'}>
                    <img src={state.flag} alt=""/>
                    <div className={"detail-content-info"}>
                        <h3>{state.name}</h3>
                        <div className={"detail-content-info-content"}>
                            <div className={'info-content-left'}>
                                <div>
                                    <span className={'info-title'}>Native Name:</span>
                                    <span>{state?.nativeName}</span>
                                </div>
                                <div>
                                    <span className={'info-title'}>Population:</span>
                                    <span>{numberWithCommas(state?.population)}</span>
                                </div>
                                <div>
                                    <span className={'info-title'}>Region:</span>
                                    <span>{state?.region}</span>
                                </div>
                                <div>
                                    <span className={'info-title'}>Sub Region:</span>
                                    <span>{state?.subregion}</span>
                                </div>
                                <div>
                                    <span className={'info-title'}>Capital:</span>
                                    <span>{state?.capital}</span>
                                </div>
                            </div>

                            <div className={'info-content-right'}>
                                <div>
                                    <span
                                        className={'info-title'}>Top Level Domain:</span><span>{state?.topLevelDomain.join()}</span>
                                </div>
                                <div>
                                    <span
                                        className={'info-title'}>Currencies:</span><span>{state?.currencies.map(currency => currency.code).join()}</span>
                                </div>
                                <div>
                                    <span
                                        className={'info-title'}>Languages:</span><span>{state?.languages.map(lang => lang.name).join()}</span>
                                </div>
                            </div>
                        </div>
                        <div className={'borders-container'}>
                            <span className={'info-title border-title'}>Border Countries:</span>
                            {
                                state?.borders?.map((border, index) => <Chip label={border} key={index}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Detail;
