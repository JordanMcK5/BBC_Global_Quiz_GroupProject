import React, { useState, useEffect } from 'react'
import WorldMap from '../components/WorldMap'
import Country from '../components/Country'
import { Route } from "react-router-dom";

const MapContainer = () => {

    const [countries, setCountries] = useState([])

    const fetchAllCountries = function () {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }

    useEffect(() => {
        fetchAllCountries()
    }, [])

    return (
        <div>
            <Route exact path="/map" component={() => (<WorldMap countries={countries} />)} />
            <Route exact path="/country" component={() => (<Country countries={countries} />)} />
        </div>
    )
}

export default MapContainer