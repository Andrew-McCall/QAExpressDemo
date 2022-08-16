const router = require("express").Router();
const e = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/QA").then(()=>{
    console.log("DB Connected")
}).catch(console.log)

const trainerSchema = mongoose.Schema({
    name:String,
    age:Number,
    tech:[String]
})

const trainerModel = new mongoose.model("trainers", trainerSchema)

router.get("/getAll", (req, res) =>  {

    trainerModel.find({}).then((trainers)=>{
        res.send( JSON.stringify(trainers) )
    }).catch((err)=>{
        throw err;
    })

})

router.post("/create", (req, res) => {
    
    trainerModel.create(req.body).then((trainer)=>{
        res.send( JSON.stringify(trainer) )
    }).catch((err)=>{
        throw err;
    })

})

router.delete("/delete/:id",(req, res)=>{

    trainerModel.find({}).then((trainers)=>{
        
        if (req.params.id >= 0 && req.params.id < trainers.length){

            trainerModel.findByIdAndDelete(trainers[req.params.id]._id).then((deleted)=>{
                res.send(deleted)
            }).catch((err)=>{
                throw err
            });

        }else{
            throw new Error("Invaild Id")
        }
        
    }).catch((err)=>{
        throw err;
    })

})

module.exports = router;