const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var nodemailer = require('nodemailer');
const creds = require('./config');


// API Routes
router.use("/api", apiRoutes);




var transport = {
  host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: {
  user: creds.USER,
  pass: creds.PASS
}
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
if (error) {
  console.log(error);
} else {
  console.log('Server is ready to take messages');
}
});

router.post('/send', (req, res, next) => {
var name = req.body.name
var email = req.body.email
var bizname = req.body.bizname
var address = req.body.address
var tin = req.body.tin
var message = req.body.message
var content = `name: ${name} \n email: ${email}  \n bizname: ${bizname}  \n address: ${address}  \n tin: ${tin} \n message: ${message} `

var mail = {
  from: name,
  to: 'jordan.r.servos@gmail.com',  // Change to email address that you want to receive messages on
  subject: 'New Message from Contact Form',
  text: content
}

transporter.sendMail(mail, (err, data) => {
  if (err) {
    res.json({
      status: 'fail'
    })
  } else {
    res.json({
     status: 'success'
    })
  }
})
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;