import React, { useState, useEffect } from "react"
import FlagsQuizQuestion from "../components/FlagsQuizQuestion"
import CapitalsQuizQuestion from "../components/CapitalsQuizQuestion"
import Results from "../components/Results"
import { postResults as postResultsFlags } from "../services/FlagsQuizService";
import { postResults as postResultsCapitals } from "../services/CapitalsQuizService";

const maxNumberOfRounds = 10

const QuizQuestionContainer = () => {
    const [countries, setCountries] = useState([])
    
    const [round, setRound] = useState(1)
    const [countryIndex, setCountryIndex] = useState(null)

    const [results, setResults] = useState([])
    const [quizEnded, setQuizEnded] = useState(false)

    const [showFlags, setShowFlags] = useState(false)
    const [showCapitals, setShowCapitals] = useState(false)


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
            console.log("Yaldi")
        }
        else {
            newResults.push({ round, winner: false})
            console.log("Fuck")
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
            if (showCapitals) return <Results results={results} postResults={postResultsCapitals}/> 
             else if (showFlags) return <Results results={results} postResults={postResultsFlags}/> 
        }
        else if (showFlags) {
            return <FlagsQuizQuestion currentCountry={countries[countryIndex]?.name} answers={getAnswers()} receiveAnswer={receiveAnswer} /> 
        }
        else if (showCapitals) {
            return <CapitalsQuizQuestion currentCountry={countries[countryIndex]?.name} answers={getAnswers()} receiveAnswer={receiveAnswer} /> 
        }
    }

   
    const handleShowFlags = () => {
        setShowFlags(true)
        setShowCapitals(false)
    }

    const handleShowCapitals = () => {
        setShowCapitals(true)
        setShowFlags(false)
    }

    return (
        <div>
            <button onClick={handleShowFlags}> Flags Quiz</button>
            <button onClick={handleShowCapitals}> Capitals Quiz</button>
            {renderContent()}
        </div>
    )

}

export default QuizQuestionContainer