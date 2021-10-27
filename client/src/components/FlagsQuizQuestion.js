import React from "react"

const FlagsQuizQuestion = ({currentCountry, answers, receiveAnswer }) => {

    if (!currentCountry || answers.length === 0) {
        return null
    }

    const quizAnswers = answers.map((answer) => {
        return (
             <img className="flag-quiz-images" key={answer.abbreviation} alt="flag-img" src={answer.flag} onClick={() => { receiveAnswer(answer.abbreviation) }} />
        )
    })

    return (
        <div>
            <img className="flag_logo" height="250" src={`${process.env.PUBLIC_URL}/flag.png`}  />
            <p className="capital1">What is the flag of {currentCountry}?</p>
            <div id="answers">
                {quizAnswers}
            </div>
        </div>
    )
}

export default FlagsQuizQuestion