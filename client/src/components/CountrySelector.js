import React from "react";

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = function (event) {
        onCountrySelected(countries[event.target.value])
    }

    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    })

    return(
        <div>
        <img className="main_logo" height="500" src={`${process.env.PUBLIC_URL}/logo.png`}  />
        <select className="country_homepage_dropdown" defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {countryOptions}
        </select>
        </div>
    )
}

export default CountrySelector