const express = require("express");
const {Square} = require("./demo.js")

const app = express();
app.use(express.json())

const server = app.listen(3001, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});

app.get("/", (req, res) => {
    res.send()
})

app.get("/hello", (req, res) => {
    res.status(200).send("Hello World!")
})

app.get('/error', (req, res) => {
    res.status(500).send('Mistakes were made');
});

app.post("/update/:id", (req, res) => {
    const id = req.params.id;

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