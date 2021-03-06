const baseURL = 'https://restcountries.com/v2/all';
// const baseURL = 'http://localhost:5000/api/countries/'; Make sure to check this isn't needed

const WorldService =  {
  getData() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addData(data) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateData(data) {
    return fetch(baseURL + data._id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteData(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default WorldService;