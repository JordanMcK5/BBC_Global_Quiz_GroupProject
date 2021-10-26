import React, { useState, useEffect } from 'react'
import WorldMap from '../components/WorldMap'
import CountrySelector from '../components/CountrySelector'
import CountryDetail from '../components/CountryDetail'
import { Route } from "react-router-dom";
import Country from '../components/Country'

const WorldContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)

    const fetchAllCountries = function () {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }

    useEffect(() => {
        fetchAllCountries()
    }, [])

    const onCountrySelected = function (country) {
        setSelectedCountry(country);
    }

    return (
        <>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            <Route exact path ="/map" component={()=>(<WorldMap countries={countries}/>)} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
            <Route exact path="/country" component={() => (<Country countries={countries} />)} />
        </>


    )
}

export default WorldContainer;