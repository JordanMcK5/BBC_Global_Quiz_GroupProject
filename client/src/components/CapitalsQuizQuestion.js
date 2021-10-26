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
        <img className="main_logo" height="250" src={`${process.env.PUBLIC_URL}/quiz.png`}  />
            <p className="capital1">What is the capital of {currentCountry}?</p>
            <div className="capital2" id="answers">
                {quizAnswers}
            </div>
        </div>
    )
}

export default CapitalsQuizQuestion