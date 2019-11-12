const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser'); 
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

const { PORT } = process.env;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));

app.use( (req, res, next) => {
  console.log(Date(), req);
  next();
})

app.post('/api/send_email', (req, res, next) => {
  const { name, email, phone, serviceRequested, prefferedTime, notesOrQuestions } = req.body;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jeffreystokesddswebsite@gmail.com',
      pass: 'iamapassword!'
    }
  });

  const mailOptions = {
    from: 'jeffreystokesddswebsite@gmail.com',
    to: 'brockston.king@gmail.com',
    subject: 'New message from JS, DDS website:',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Requested Service: ${serviceRequested}</p><p>Preffered Time of Day: ${prefferedTime}</p><p>Questions/Notes: ${notesOrQuestions}</p>`
  }

  transporter.sendMail(mailOptions, (err, info) => {
    res.status(err ? 500 : 200).send({response: err ? 'There was an error sending your message' : 'Your message was sent', info: err ? err : info})
    console.log( err ? err : info);
  })
})


// Add the below for routing capability for controller files
//app.use(require('./router'));

var server_host = '0.0.0.0';
const port = PORT || 4005

// app.get('/*', (req, res) => {
//   res.sendFile('index.html', {
//     root: path.join(__dirname, "build")
//   })
// });


app.listen(port, server_host, () => {
    console.log(`Listening on port ${ port }`);
})