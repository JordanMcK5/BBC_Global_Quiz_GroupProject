import React from "react";

const Country = ({ countries }) => {

    if (countries.length === 0) {
        return null
    }

    var countryName = window.location.href.replace("http://localhost:3000/country/?detail=", "")
    var countryFinal = countryName.replaceAll("%20", " ")
    var countryFinal2 = countryFinal.replaceAll("%C3%A7", "ç")
    var countryFinal3 = countryFinal2.replaceAll("%C3%85", "Å")
    var countryFinal4 = countryFinal3.replaceAll("%C3%A9", "é")

    const countryFind = function (countryList, fixedName) {
        for (var country of countryList) {
            if (country.name === fixedName) {       
                return country
            }
        }
    }

    const countryDetails = countryFind(countries, countryFinal4)

    const languagesSpoken = countryDetails?.languages.map((language) => {
        return language.name
    }).join(", ")

    const currencies = countryDetails?.currencies.map((currency) => {
        return currency.name
    }).join(", ")

    return (
        <>
            <p>{countryDetails.name}</p>
            <p>Capital: {countryDetails.capital}</p>
            <p>Population: {countryDetails.population}</p>
            <p>Currency: {currencies}</p>
            <p>Languages: {languagesSpoken}</p>
            <img height="200" width="400" src={countryDetails.flag} alt=""/>
        </>
    )
}
export default Country