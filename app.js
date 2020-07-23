const express = require('express')
const app = express()
const cheerio = require('cheerio')
const request = require('request')
const myProxyList = require('./userAgentList')
const slug = require('slug')
// const { response } = require('express')
const codeplaygroundRoute =require('./routes/codeplaygound')
const userInfoRoute = require('./routes/userInfo')
const qnaInfoRoute = require('./routes/qnaInfo')
const port = 5000;

const  myUserAgents =  myProxyList.myUserAgents;

app.use(express.json({limit:'1mb'}))

app.use('/userInfo', userInfoRoute)
app.use('/codeplayground', codeplaygroundRoute)
app.use('/qnaInfo', qnaInfoRoute)

app.listen(port, ()=> console.log(`Running at port ${port}`))