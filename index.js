/// Imports
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

///Setup
const app = express();

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

/// Routes app.use(require("./routes/mainAPI.js"))
const mainAPI = require("./routes/mainAPI.js")
app.use("/api", mainAPI )

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