import React, { useState, useEffect } from 'react'
import WorldMap, { CountryContext } from 'react-svg-worldmap';
import Results from '../components/Results';

const ReactQuizContainer = ({postResults}) => {

    const [countries, setCountries] = useState([])
    const [animals, setAnimals] = useState([
        { animal: 'the Beaver', iso: 'CA', name: 'Canada' },
        { animal: 'the Snow Monkey', iso: 'JP', name: 'Japan' },
        { animal: 'the Polar Bear', iso: 'GL', name :'Greenland' },
        { animal: 'the Golden Eagle', iso: 'MX', name : 'Mexico' },
        { animal: 'the Tiger', iso: 'IN', name : 'India'},
        { animal: 'the Kiwi', iso: 'NZ', name: 'New Zealand' },
        { animal: 'the Brown Bear', iso: 'RU', name: 'Russia' },
        { animal: 'the Bald Eagle', iso: 'US', name: 'The United States'},
        { animal: 'the Giant Panda', iso: 'CN', name : 'China'},
        { animal: 'the Springbok', iso: 'ZA', name : 'South Africa' }
    ])
    const [selectedAnimal, setSelectedAnimal] = useState({ animal: 'the Kangaroo', iso: 'AU', name : 'Australia'})
    const [question, setQuestion] = useState(`1. Click the Country where the National Animal is ${selectedAnimal.animal}`)
    const [answer, setAnswer] = useState("")
    const [wins, setWins] = useState(0)
    const [loses, setLoses] = useState(0)
    const [round, setRound] = useState(1)
    const [button, setButton] = useState('')
    const [viewResults, setViewResults] = useState('')
    const [results, setResults] = useState([])
    const [quizEnded, setQuizEnded] = useState(false)
    const [clicking, setClicking] = useState(true)

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
            fill: countryCode === countryCode ? '#60ba8f' : color,
            stroke: 'yellow',
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
        let question = `${round}. Click the Country where the National Animal is ${selectedAnimal.animal}`
        setQuestion(question)
    }

    const onClick = () => {
        if (round === 11) {
            endQuiz()
        } else {
            setNewQuestion()
            setAnswer("")
            setButton("")
            setClicking(true)
        }
    }

    const clickAction = (country) => {
        if (clicking) {
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
            setAnswer(`Nope. Sorry not ${country.countryName}! It's ${selectedAnimal.name}`)
        }
        setRound(round + 1)
        setResults(newResults)
        for (var i = 0; i < animals.length; i++) {
            if (animals[i] === selectedAnimal) {
                animals.splice(i, 1);
            }
        }
        newQuestion()
        setClicking(false)
    }
}
    const endQuiz = () => {
        setViewResults(`You Got ${wins}/10!`)
        setQuizEnded(true)
    }

    const endOfQuiz = () => {
        if (quizEnded){
           return <Results results={results} postResults={postResults} /> 
    }}

      return (
            <div className="map-app">
            <img className="animal_image" height="250" src={`${process.env.PUBLIC_URL}/animals.png`}  />
            <h1>National Animals Quiz</h1>
            <h2>{question}</h2>
            <h2>{answer} <span className="a-button-feel" onClick={onClick}>{button}</span></h2>
            <h2>{viewResults}</h2>
            {endOfQuiz()}

            <div className="map-container">
            
            <WorldMap
                className="Map"
                backgroundColor="transparent"
                color="green"
                data={countryItems}
                onClickFunction={clickAction}
                size='responsive'
                styleFunction={stylingFunction}
            />
         
            </div>
            </div> 
     )
}


export default ReactQuizContainer;

