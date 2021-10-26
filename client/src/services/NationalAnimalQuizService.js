export const getResults = () => {
    return fetch('http://localhost:5000/api/countries/quiz/national-animals"')
    .then(res => res.json())
}

export const postResults = (payload) => {
    return fetch('http://localhost:5000/api/countries/quiz/national-animals/scores"', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-type': 'application/json' }
 })
 .then(res => res.json())
}

// export const deleteBooking = (id) => {
//     return fetch('http://localhost:5000/api/countries/quiz-results/flags' + id, {
//         method: 'DELETE'
//     })
// };