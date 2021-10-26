import React from 'react'

const CountryDetail = ({selectedCountry}) => {

    const languagesSpoken = selectedCountry.languages.map((language) => {
        return language.name
    }).join(", ")

    const currencies = selectedCountry.currencies.map((currency) => {
        return currency.name
    }).join(", ")

    return(
        <div>
            <h3>{selectedCountry.name}</h3>
            <img src={selectedCountry.flag} alt="flag" width="200" height="150"></img>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Languages: {languagesSpoken}</p>
            <p>Population: {selectedCountry.population}</p>
            <p>Currencies: {currencies}</p>
        </div>
    )
}

export default CountryDetail;