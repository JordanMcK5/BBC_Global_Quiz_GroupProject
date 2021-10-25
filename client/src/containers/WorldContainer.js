import React, { useState, useEffect } from 'react'
import WorldMap from '../components/WorldMap'
import CountrySelector from '../components/CountrySelector'
import CountryDetail from '../components/CountryDetail'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Country from '../components/Country'

const WorldContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [countriesForMap, setCountriesForMap] = useState([])

    const fetchAllCountries = function () {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }

    useEffect(() => {
        fetchAllCountries()
    }, [])

    const fetchAllCountriesForMap = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountriesForMap(data))
    }

    useEffect(() => {
        fetchAllCountriesForMap()
    }, [])

    const onCountrySelected = function (country) {
        setSelectedCountry(country);
    }

    return (
        <Router>
            <h2>Hello WorldQuiz!</h2>
            <Link to="/">Home</Link><br></br>
            <Link to="/map">View map</Link><br></br>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            <Route path ="/map" component={()=>(<WorldMap countriesForMap={countriesForMap}/>)} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
            <Route path="/country" component={() => (<Country countries={countries} />)} />
        </Router>


    )
}

export default WorldContainer;