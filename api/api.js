'use strict'

const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())

app.post('/', function (req, res) {

  console.log(req.body)

  let message = req.body.message
  sendMail(message)

  res.status(200).json({ 'message': 'Your mail send successfully' })

})

module.exports = {
  path: '/api/api',
  handler: app
}

const sendMail = (message) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "025f8dad36744c", // generated ethereal user
      pass: "e2c51e1a277270", // generated ethereal password
    },
  });

  setTimeout(() => {
    transporter.sendMail({
      from: '354e16cbc3-803264@inbox.mailtrap.io',
      to: '354e16cbc3-803264@inbox.mailtrap.io',
      subject: 'Test message subject',
      html: 'Message = ' + message,
    })
  },100)
}
