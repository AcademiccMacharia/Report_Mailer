const userRoutes = require('express').Router();

const sendMail = require('../utils/sendMail')

userRoutes.post('/sendmail', (req, res)=>{
    sendMail()
    res.send("I tried to send a mail. Let's get the id in the console.")
})

module.exports = userRoutes;