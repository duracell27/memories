const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const postRoutes = require('./routes/posts')


const app = express()


app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

app.use(cors())
app.use('/posts', postRoutes)

const CONNECTION = 'mongodb+srv://SHMIDT:27071996uA@cluster0.1tdop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION).then(()=>{app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})}).catch(ERROR=>console.log(ERROR.message))