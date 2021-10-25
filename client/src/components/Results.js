import React, { useState } from "react";

const Results = ({ results, postResults }) => {

    const [name, setName] = useState(null)

    const resultEntries = results.map((result) => {
        let resultString 
        if (result.winner) {
            resultString = "won"
        }
        else {
            resultString = "lost"
        }
        return <li>{result.round} - {resultString}</li>
    })

    const onChange = (event) => {
        setName(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newResult = {
            name: name,
            results: results
        }
        
        postResults(newResult)
    }
    

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:</label>
                <input onChange={onChange} type="text" id="Name"/>
                <button type="submit" value="Save" id="save">Submit</button>
            </form>
            <ul>{resultEntries} </ul>
        </div>
    )
}


export default Results