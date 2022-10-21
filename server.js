const PORT = 8090
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/languages', async(req,res) => {
    const options = {
        method: 'GET',
        api_key: process.env.API_KEY,
    }
    try {
        const response = await axios('https://libretranslate.com/languages', options);
        res.status(200)
    } catch(err){
        console.log(err);
        res.status(500);
    }
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT));