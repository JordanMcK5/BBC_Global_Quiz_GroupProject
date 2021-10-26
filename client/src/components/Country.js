import React from "react";

const Country = ({ countries }) => {

    if (countries.length === 0) {
        return null
    }

    var countryName = window.location.href.replace("http://localhost:3000/country/?detail=", "")
    var countryFinal = countryName.replaceAll("%20", " ")

    const countryFind = function (countryList, fixedName) {
        for (var country of countryList) {
            if (country.name === fixedName) {       
                return country
            }
        }
    }

    const countryDetails = countryFind(countries, countryFinal)

    const languagesSpoken = countryDetails?.languages.map((language) => {
        return language.name
    }).join(", ")

    const currencies = countryDetails?.currencies.map((currency) => {
        return currency.name
    }).join(", ")

    return (
        <>
            <p>{countryDetails.name}</p>
            <p>{countryDetails.population}</p>
            <p>{currencies}</p>
            <p>{languagesSpoken}</p>
            <img src={countryDetails.flag} alt=""/>
        </>
    )
}
export default Country