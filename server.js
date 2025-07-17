require("dotenv").config
const express = require ("express")
app = express()
const dataBase = require("./database/database")

PORT = process.env.PORT || 5000


const startServer = async ()=>{
    await dataBase();
    app.listen(PORT, ()=>{
    console.log(`server is now listening on port ${PORT}`)
})   
}
startServer()
