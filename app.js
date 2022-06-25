const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3001

require('dotenv').config()



app.get('/neo', (req, res) => {
    const start_date = req.query.start_date
    const end_date = req.query.end_date
    console.log(start_date)
    console.log(end_date)
    console.log(process.env.REACT_APP_NASA_API_KEY)

    const options = {
        method: 'GET', 
        url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    }


    if (start_date === end_date) {
        axios.request(options)
        .then((response) => {
            response = response.data.near_earth_objects[start_date].map(({ links, ...object }) => object);
            res.json(response)
        })
        .catch((error) => {
            console.log('error')
            console.log(error)
        })
    }
    else {
        res.json({"error": "wrong parameters"});
    }


})


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})