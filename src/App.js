import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Person  from './components/Person/Person';
import Country from './components/Country/Country';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
     <VisitingCountries></VisitingCountries>
     <Person></Person>
     <Country></Country> */}

     <Country></Country>

    </div>
  );
}

// function VisitingCountries(){
//   const [country, setCountry] = useState([]);

//   useEffect(()=>{

//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=> setCountry(data))
//   },[])
//   return(
//     <div>
//       <h2>Visiting all the countires of the world!!!</h2>
//       <p>{console.log(country.population)}</p>
//       <p>Data: {country.length}</p>
//       {
//         country.map(country=> <ViewDetails  name={country.name.common} 
//           a={country.population} ></ViewDetails>)
//       }
//     </div>
//   )
// }

// function ViewDetails(props){
// return(
//   <div>
//     <h2>Country Name: {props.name}</h2>
//     <p>Population: {props.a}</p>
//   </div>
// )
// }


export default App;
