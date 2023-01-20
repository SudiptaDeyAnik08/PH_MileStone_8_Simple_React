import React from 'react';
import './ChildCountry.css'

const ChildCountry = (props) =>{
    return(
        <div className='ChildCountry'>
            <h2>Country Name: {props.name} </h2>
            <p>Population: {props.p}</p>
            <p>Area : {props.area}</p>
        </div>
    )
}

export default ChildCountry;