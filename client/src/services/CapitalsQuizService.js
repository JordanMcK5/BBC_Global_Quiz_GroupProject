export const getResults = () => {
    return fetch('http://localhost:5000/api/countries/quiz-results/capitals')
    .then(res => res.json())
}

export const postResults = (payload) => {
    return fetch('http://localhost:5000/api/countries/quiz-results/capitals', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-type': 'application/json' }
 })
 .then(res => res.json())
}

export const deleteResult = (id) => {
    return fetch('http://localhost:5000/api/countries/quiz-results/capitals/' + id, {
        method: 'DELETE'
    })
};