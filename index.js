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

console.log(" <3 Youssef! Y in uppercase<3 ");


// Retrieve user from database using his identifier -- v1.18.10
function getUser(id){
  // display warning that says that this functionality will change in v2.0.0 very soon and it will require the use of email
}

// new line