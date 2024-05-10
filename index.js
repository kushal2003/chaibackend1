require ('dotenv').config()
const express = require('express')
// or
// import express from "express"
 
const app = express()
const port = 4000


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req,res)=>{
    res.send('kushal will be the richest')
})


app.get('/youtube',(req,res)=>{
    res.send("Chai Aur Code With Kushal")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

