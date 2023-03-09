const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const e = require('express')
app.use(cors())
app.use(express.static(path.join(__dirname + "/public")))
const port = 5000

require('dotenv').config()



app.get('/neo', (req, res) => {
    const start_date = req.query.start_date
    const end_date = req.query.end_date



    console.log('start_date: ' + start_date ); 
    console.log('end_date ' + end_date); 

    console.log(process.env.REACT_APP_NASA_API_KEY); 

    const options = {
        method: 'GET', 
        url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    }


    if (start_date === end_date) {
        axios.request(options)
        .then((response) => {
            if(response.data.near_earth_objects[
                start_date
            ] != undefined) {
                response = response.data.near_earth_objects[start_date].map(({ links, ...object }) => object);
            } else {
                response = {}
                response.error = 'No results found'; 
            }



            res.json(response)
        })
        .catch((error) => {
            console.log(error)
           res.status(400).json({"error": error})
        })
    }
    else {
        res.json({"error": "wrong parameters"});
    }


})


app.listen(process.env.PORT || port, () => {
    console.log(`server listening on port ${port}`)
})