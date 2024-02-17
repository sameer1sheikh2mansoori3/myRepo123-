const mongoose = require('mongoose')


const connectDatabase = ()=>{

mongoose.connect(process.env.DB_URI).then(
    (res)=>{
        console.log(`we are connected to our database`)
    }
).catch(
    (err)=>{
        console.log(err)
    }
    ).finally(
        ()=>{
            console.log("we are at our final")
        }
    )


}

module.exports = connectDatabase;