'use strict'

const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())

app.post('/', function (req, res) {

  let message = req.body.message

  sendMail(message)
    .then(result => {
      res.status(200).json({ 'success': true, 'message': 'Your mail send successfully' })
    })
    .catch(err => {
      res.status(200).json({ 'success': false, 'message': err.message })
    })
})

module.exports = {
  path: '/api/api',
  handler: app
}

const sendMail = (message) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to: 'xjester0@gmail.com',
    subject: 'Test message subject',
    html: 'Message = ' + message,
  })
}
