import React, { useState, useEffect } from "react";

const Scores = ({getResults, deleteResult}) => {

    const [scores, setScores] = useState([])

    useEffect(()=>{
        getResults()
        .then((data)=>{
          setScores(data)
        })
      },[getResults]);
 

    const headerRow = scores[0]?.results.map((result) => {
        return <th>Round {result.round}</th>
    })

    const resultRows = scores?.map((score) => {
      const playerCell = <td>{score.name}</td>
      const resultCells = score.results.map((result) => {
          return <td>{result.winner ? "won" : "lost"}</td>
          })
        return (
          <tr>{playerCell}{resultCells}</tr>
        )
      })

    // const handleDelete = () => { 
    //     deleteResult(scores.results).then(() => {
    //         removeScore(scores.results)
    //     })
    // }

    
    // const removeScore = (id) => {
    //     const temp = scores.map(s => s)
    //     const indexToDel = temp.map(s => s.results).indexOf(id);
    //     setScores(temp)
    // }
    // <button onClick={handleDelete}> Delete Score</button> 


    return (
        <div>
            <table> 
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