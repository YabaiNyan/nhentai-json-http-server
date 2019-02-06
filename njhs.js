// import .env
require('dotenv').config()
var port = 80
if (process.env.PORT != undefined) {
    port = process.env.PORT
}

// requires
var express = require('express')
var nhentai = require('nhentai-js')

// user config area
var spaces = 4

// init express
var app = express()

// configure spaces in json file
app.set('json spaces', spaces)

// respond bad request if nothing is specified
app.get('/', function (req, res) {
    res.status(400)
        .send("400 bad request")
})

// main handler
app.get('/:bookId', function (req, res) {
    var bookId = req.params.bookId
    if (!isNaN(bookId)) {
        nhentai.getDoujin(bookId)
            .then((nhObj) => {
                res.json(nhObj)
            })
            .catch(() => {
                res.status(404)
                    .send("404 not found")
            })
    } else {
        res.status(400)
            .send("400 bad request")
    }
})

app.listen(port, () => console.log(`njhs.js listening on port ${port}!`))