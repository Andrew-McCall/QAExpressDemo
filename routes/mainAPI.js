const router = require("express").Router();

router.get("/", (req, res) => {
    res.send()
})

router.get("/hello", (req, res) => {
    res.status(200).send("Hello World!")
})

router.get('/error', (req, res, next) => {
    //working out
    throw new Error("tes2t")
    //next(error)
});

router.post("/update/:id", (req, res) => {
    const id = req.params.id;
    if (id<0){
        throw new Error("Bad Id")
    }

    console.log(id)

    res.send(id);

})

router.post("/square/:number", (req, res) => {
    const no = req.params.number;

    res.send(""+no);

})


router.post("/body", (req, res) => {
    console.log(req.body)
    res.send("body recived")
}) 

module.exports = router;