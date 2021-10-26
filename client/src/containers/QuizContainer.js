import React, { useState, useEffect } from "react"
import Results from "../components/Results"

const maxNumberOfRounds = 10

const QuizQuestionContainer = ({QuestionComponent, postResults}) => {
    const [countries, setCountries] = useState([])
    
    const [round, setRound] = useState(1)
    const [countryIndex, setCountryIndex] = useState(null)

    const [results, setResults] = useState([])
    const [quizEnded, setQuizEnded] = useState(false)

    const fetchCountryData = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => data.filter(country => country?.capital?.length > 0))
        .then(data => setCountries(mapCountries(data)))
    }

    const mapCountries = (data) => {
        return data.map((countryObject) => {
            return {
                flag: countryObject.flags.png,
                name: countryObject.name.common,
                abbreviation: countryObject.cca2,
                capital: countryObject.capital?.[0]
            }
        })
    }

    useEffect(() => {
        fetchCountryData()
    }, [])

    useEffect(() => {
        if (countries.length > 0) {
            const initialRound = Math.floor(Math.random() * ((countries.length - maxNumberOfRounds) - 0) + 0)
            setCountryIndex(initialRound)
        }
    }, [countries])

    useEffect(() => {
        if (round > maxNumberOfRounds) {
            endQuiz()
        }
    }, [round])

    const getRandomCountryIndex = () => {
        return Math.floor(Math.random() * (countries.length - 0) + 0)
    }

    if (!countryIndex) {
        return null
    }

    const getAnswers = () => {
        const answers = []
        if (countries.length > 0) {
            answers.push(countries[countryIndex])

            while (answers.length < 4) {
                const randomCountry = countries[getRandomCountryIndex()]
                if (!answers.some((answer) => answer.abbreviation === randomCountry.abbreviation)) {
                    answers.push(randomCountry)
                }
            }
        }

        return answers.sort(() => Math.random() - 0.5)
    }

    const receiveAnswer = (answerAbbreviation) => {
        const newResults = [...results]
        if (answerAbbreviation === countries[countryIndex].abbreviation) {
            newResults.push({ round, winner: true})
        }
        else {
            newResults.push({ round, winner: false})
        }
        setResults(newResults)
        setRound(round + 1)
        setCountryIndex(countryIndex + 1)
    }

    const endQuiz = () => {
        setQuizEnded(true)
    }

    const renderContent = () => {
        if (quizEnded) {
            return <Results results={results} postResults={postResults}/> 
        }
        else {
            return <QuestionComponent currentCountry={countries[countryIndex]?.name} answers={getAnswers()} receiveAnswer={receiveAnswer} /> 
        }
    }

    return (
        <div>
            {renderContent()}
        </div>
    )

}

export default QuizQuestionContainer