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
            <p>Capital: {selectedCountry.capital}</p>
            <p>Language: {languagesSpoken}</p>
            <p>Population: {selectedCountry.population}</p>
            <p>Currencies: {currencies}</p>
            <img src={selectedCountry.flag} alt=""/>

        </div>
    )
}

export default CountryDetail;