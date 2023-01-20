import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ChildCountry from '../ChildCountry/ChildCountry';

const Country = () => {

    const [desh, setDesh] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(res=>setDesh(res))
    },[])


return(
    <div>
        <h2>Hello from country</h2>
        {
            desh.map(ektaDesh => console.log(ektaDesh))
        }
        {
        desh.map(ektaDesh => <ChildCountry
            country = {ektaDesh}
            name={ektaDesh.name.common} 
            p={ektaDesh.population}
              area={ektaDesh.area} region={ektaDesh.region}
             ></ChildCountry> )
        }
    </div>
)
}

export default Country;