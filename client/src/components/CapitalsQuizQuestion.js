import React from "react"

const CapitalsQuizQuestion = ({currentCountry, answers, receiveAnswer }) => {

    if (!currentCountry || answers.length === 0) {
        return null
    }

    const quizAnswers = answers.map((answer) => {
        return (
            <div key={answer.abbreviation} onClick={() => { receiveAnswer(answer.abbreviation) }}>{answer.capital}</div>
        )
    })


    return (
        <div>
            <p>What is the capital of {currentCountry}?</p>
            <div id="answers">
                {quizAnswers}
            </div>
        </div>
    )
}

export default CapitalsQuizQuestion