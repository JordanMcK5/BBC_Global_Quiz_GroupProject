import React, { useState, useEffect } from 'react'
import WorldMap, { CountryContext } from 'react-svg-worldmap';

const ReactQuizContainer = () => {

    // state
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState([])
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
    ])

    const [selectedAnimal, setSelectedAnimal] = useState({ animal: 'the Kangaroo', iso: 'AU' })
    const [question, setQuestion] = useState(`Click the Country where the National Animal is ${selectedAnimal.animal}...`)
    const [answer, setAnswer] = useState("")
    const [correctCountries, setCorrectCountries] = useState([])
    const [inCorrectCountries, setInCorrectCountries] = useState([])
    const [quizEnded, setQuizEnded] = useState(false)
    const [results, setResults] = useState([])
    const [count, setCount] = useState(0)
    const [button, setButton] = useState('')

    
    // fetch api
    const fetchAllCountries = () => {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }
    useEffect(() => {
        fetchAllCountries()
    }, [])

    const countryItems = countries.map((country) => {
        const ios = country.alpha2Code
        return { country: ios, value: "" }
    })

    const setNewQuestion = () => {
        let question = `Click the Country where the National Animal is ${selectedAnimal.animal}...`
        setQuestion(question)
    }
    const onClick = () => {
        setNewQuestion()
        setAnswer("")
        setButton("")
     }
    
    const newQuestion = () => {
        let animal = animals[Math.floor(Math.random() * animals.length)];
        setSelectedAnimal(animal)
    }
    

    // styling
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


    //  clicking on country to answer
    const clickAction = (country) => {
        if (count === 9) {
            endQuiz()
        }else{
        if (country.countryCode === selectedAnimal.iso) {

            for (var i = 0; i < animals.length; i++) {
                if (animals[i] === selectedAnimal) {
                    animals.splice(i, 1);
                }
            }
            setCount(count + 1)
            setCorrectCountries(country.countryName)
            newQuestion()
            setButton(`⮕`)
            setAnswer(`Woohoo! ${country.countryName} is Correct ${button}`)

        } else {
            setInCorrectCountries(country.countryName)
            setAnswer(`Nope. Sorry not ${country.countryName} Try Again!`)
        }
    }}

    console.log(correctCountries)
    // console.log(se)


    // trying to end quiz and post results
    // 
    const endQuiz = () => {
        if (inCorrectCountries === []){
            console.log("You got the National Animals of these countries first try:", correctCountries)
        }else if (correctCountries === []){
            console.log("Need little more revision on these countries...", inCorrectCountries)
        }else {
            console.log("You got the National Animals of these countries first try:", correctCountries)
            console.log("Need little more revision on these countries...", inCorrectCountries)
        }
    }

    // const postResults = () => {

    // }


    // rendered on page
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
            <h1>{answer} <span id="aButtonFeel" onClick={onClick}>{button}</span></h1>
        </div>
    )
}

export default ReactQuizContainer;