const mongoose = require('mongoose')

const Connection = ()=>{
    return mongoose.connect("mongodb+srv://saikiran11471:Fkx37ldMcAuDw6dM@cluster0.0m50mav.mongodb.net/")
}

module.exports =  {Connection}