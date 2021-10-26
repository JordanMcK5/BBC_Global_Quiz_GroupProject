import React, { useState } from "react";
import { useHistory } from "react-router";

const Results = ({ results, postResults }) => {
    const history = useHistory()
    const [name, setName] = useState(null)

    const resultEntries = results.map((result) => {
        let resultString 
        if (result.winner) {
            resultString = "Won"
        }
        else {
            resultString = "Lost"
        }
        return <tr><td class="results-round">Round {result.round}:</td><td class={result.winner ? "results-outcome won" : "results-outcome lost"}>{resultString}</td></tr>
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
        .then(() => history.push(`${history.location.pathname}/scores`))
    }
    

    return (
        <div>
            <form id="name-form" onSubmit={onSubmit}>
                <label id="name-tag">Name</label>
                <input onChange={onChange} type="text" id="Name"/>
                <button type="submit" value="Save" id="save">Submit</button>
            </form>
            <table id="results-list">
                {resultEntries}
            </table>
        </div>
    )
}


export default Results