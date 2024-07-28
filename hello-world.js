console.log("HELLO WORLD")
const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('<h1>Hello Node!!!!</h1>');
})

server.listen(3000,err=>{
    err?console.log(err):console.log('HUSSEIN')
})

const fs = require('fs'); 
fs.writeFile('welcome.html', '<h1> HELLO NODE </h1>', err => {
err?console.log(err):console.log('yess')
})

var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});


console.log(password);

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});