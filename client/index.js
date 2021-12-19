const axios = require('axios')

const request = {
    players: 2,
    chips: 100,
    fee: 1,
}

axios.post('http://localhost:3000/newgame', request)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });