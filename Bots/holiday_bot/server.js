const axios = require('axios');
axios.get('https://holidays.abstractapi.com/v1/?api_key=80882927c8094dc4bf67c6520a40bc85&country=US&year=2020&month=12&day=25')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });