import React from 'react';
import './ChildCountry.css'

const ChildCountry = (props) =>{
    return(
        <div className='ChildCountry'>
            <h2>Country Name: {props.name} </h2>
            <p>Population: {props.p}</p>
            <p>Area : {props.area}</p>
            <p>Region: {props.region}</p>
            <div>
            <img src={props.country.flags.png} alt="" />

            </div>
        </div>
    )
}

export default ChildCountry;