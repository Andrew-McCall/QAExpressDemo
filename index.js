/// Imports
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const {Square} = require("./demo.js")

///Setup
const app = express();


/// Paths
app.get("/", (req, res) => {
    res.send()
})

app.get("/hello", (req, res) => {
    res.status(200).send("Hello World!")
})

app.get('/error', (req, res, next) => {
    //working out
    throw new Error("tes2t")
    //next(error)
});

app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    if (id<0){
        throw Error("Bad Id")
    }

    console.log(id)

    res.send(id);

})

app.post("/square/:number", (req, res) => {
    const no = req.params.number;

    res.send(4);

})


app.post("/body", (req, res) => {
    console.log(req.body)
    res.send("body recived")
}) 

/// Middlewear
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {

    // express.json is doing | .body String -> Object
    console.log(req.ip);
    console.log(new Date());
    if (req.url !== "/"){
        next();
    }

})

/// Error Middlewear (LAST!)
app.use((err, req, res, next)=> {
    console.log("Error")
    res.status(500).send('Mistakes were made');
    next()
})

/// fin
const server = app.listen(3001, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});