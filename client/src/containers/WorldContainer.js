import React, { useState, useEffect } from 'react'
import WorldMap from '../components/WorldMap'
import CountrySelector from '../components/CountrySelector'
import CountryDetail from '../components/CountryDetail'
<<<<<<< HEAD
import { Route } from "react-router-dom";
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
>>>>>>> 7b1ea8d3c5c4c2948c942d6bfb79e696e21505d2
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
        <>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            <Route exact path ="/map" component={()=>(<WorldMap countries={countries}/>)} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
<<<<<<< HEAD
            <Route path="/country" component={() => (<Country countries={countries} />)} />

=======
            <Route exact path="/country" component={() => (<Country countries={countries} />)} />
>>>>>>> 7b1ea8d3c5c4c2948c942d6bfb79e696e21505d2
        </>


    )
}

export default WorldContainer;