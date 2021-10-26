import React, { useState, useEffect } from 'react'
import WorldMap, { CountryContext } from 'react-svg-worldmap';
import Results from '../components/Results';

const ReactQuizContainer = ({postResults}) => {

    const [countries, setCountries] = useState([])
    const [animals, setAnimals] = useState([
        { animal: 'the Beaver', iso: 'CA' },
        { animal: 'the Snow Monkey', iso: 'JP' },
        { animal: 'the Polar Bear', iso: 'GL' },
        { animal: 'the Golden Eagle', iso: 'MX' },
        { animal: 'the Tiger', iso: 'IN' },
        { animal: 'the Kiwi', iso: 'NZ' },
        { animal: 'the Brown Bear', iso: 'RU' },
        { animal: 'the Bald Eagle', iso: 'US' },
        { animal: 'the Giant Panda', iso: 'CN' },
        { animal: 'the Lion', iso: 'GB' }
    ])
    const [selectedAnimal, setSelectedAnimal] = useState({ animal: 'the Kangaroo', iso: 'AU' })
    const [question, setQuestion] = useState(`Click the Country where the National Animal is ${selectedAnimal.animal}...`)
    const [answer, setAnswer] = useState("")
    const [wins, setWins] = useState(0)
    const [loses, setLoses] = useState(0)
    const [round, setRound] = useState(1)
    const [button, setButton] = useState('')
    const [viewResults, setViewResults] = useState('')
    const [results, setResults] = useState([])
    const [quizEnded, setQuizEnded] = useState(false)

    const fetchAllCountries = () => {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }
    useEffect(() => {
        fetchAllCountries()
    }, [])

    const stylingFunction = ({
        countryValue,
        countryCode,
        minValue,
        maxValue,
        color,
    }: CountryContext) => {
        const opacityLevel = countryValue
            ? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
            : 0;
        return {
            fill: countryCode === countryCode ? '#3d5c3e' : color,
            //   fillOpacity: opacityLevel,
            stroke: 'white',
            strokeWidth: 2,
            strokeOpacity: 0.2,
            cursor: 'pointer',
        };
    };

    const countryItems = countries.map((country) => {
        const ios = country.alpha2Code
        return { country: ios, value: "" }
    })

    const newQuestion = () => {
        let animal = animals[Math.floor(Math.random() * animals.length)];
        setSelectedAnimal(animal)
    }

    const setNewQuestion = () => {
        let question = `Click the Country where the National Animal is ${selectedAnimal.animal}...`
        setQuestion(question)
    }

    const onClick = () => {
        if (round === 11) {
            endQuiz()
        } else {
            setNewQuestion()
            setAnswer("")
            setButton("")
        }
    }

    const clickAction = (country) => {
        const newResults = [...results]
        if (country.countryCode === selectedAnimal.iso) {
            newResults.push({ round, winner: true})
            setWins(wins + 1)
            setButton(`⮕`)
            setAnswer(`Woohoo! ${country.countryName} is Correct ${button}`)
        } else {
            newResults.push({ round, winner: false})
            setLoses(loses + 1)
            setButton(`⮕`)
            setAnswer(`Nope. Sorry not ${country.countryName}!`)
        }
        setRound(round + 1)
        setResults(newResults)
        newQuestion()
        for (var i = 0; i < animals.length; i++) {
            if (animals[i] === selectedAnimal) {
                animals.splice(i, 1);
            }
        }
    }

    const endQuiz = () => {
        setViewResults(`You Got ${wins}/10!`)
        setQuizEnded(true)
    }

    console.log(results)

    const endOfQuiz = () => {
        if (quizEnded){
           return <Results results={results} postResults={postResults} /> 
    }}

      return (
            <div className="App">
            <h1>National Animals Quiz</h1>
            <WorldMap
                className="Map"
                color="green"
                data={countryItems}
                onClickFunction={clickAction}
                size='responsive'
                richInteraction
                styleFunction={stylingFunction}
            />
            <h2>{question}</h2>
            <h2>{answer} <span id="aButtonFeel" onClick={onClick}>{button}</span></h2>
            <h2>{viewResults}</h2>
            {endOfQuiz()}
            </div>
     )
}

export default ReactQuizContainer;

