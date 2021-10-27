import React, { useState, useEffect } from "react";

const Scores = ({getResults, deleteResult}) => {

    const [scores, setScores] = useState([])

    useEffect(()=>{
        getResults()
        .then((data)=>{
          setScores(data)
        })
      },[getResults]);
 

    const removeScore = (id) => {
        const temp = scores.map(s => s)
        const indexToDel = temp.map(s => s._id).indexOf(id);
        console.log(indexToDel);

        temp.splice(indexToDel, 1)
        setScores(temp)
    }
  
    const handleDelete = (id) => { 
        deleteResult(id).then(() => {
            removeScore(id)
        })
    }

    const headerRow = scores[0]?.results.map((result) => {
        return <th>{result.round}</th>
    })

    const resultRows = scores?.map((score) => {
      const playerCell = <td>{score.name}</td>
      const resultCells = score.results.map((result) => {
          return <td class={result.winner ? "won" : "lost"}>{result.winner ? "Won" : "Lost"}</td>
          })
        return (
            <tr>{playerCell}{resultCells}<button onClick={() => handleDelete(score._id)}> Delete Score</button> </tr> 
        )
    })


    return (
        <div>
            <table id="scores-table"> 
                <tr>
                    <th>Player</th>
                    {headerRow}
                    
                </tr>
                {resultRows}
                
            </table>
        </div>
    )

}

export default Scores