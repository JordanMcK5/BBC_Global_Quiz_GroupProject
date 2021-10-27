import React, { useState, useEffect } from 'react'
import CountrySelector from '../components/CountrySelector'
import CountryDetail from '../components/CountryDetail'

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
        <div>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
            
        </div>


    )
}

export default WorldContainer;