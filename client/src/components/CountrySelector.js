import React from "react";

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = function (event) {
        onCountrySelected(countries[event.target.value])
    }

    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {countryOptions}
        </select>
    )
}

export default CountrySelector