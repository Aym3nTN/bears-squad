const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://catfact.ninja/fact')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

// console.log("Hello bears!");