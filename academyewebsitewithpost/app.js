const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs")
const port = 800;

// express specific stuff
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())

// pug specific stuff
 app.set('view engine', 'pug')  //  set the template engine as pug
 app.set('views',path.join(__dirname,'views')) //  view path
 

// end points
app.get('/',(req , res)=>{
  const params = { }
res.status(200).render('home.pug', params)
})
app.get('/contact',(req , res)=>{
  const params = { }
res.status(200).render('contact.pug', params)
})
app.post('/contact',(req , res)=>{
  name = req.body.name
  phone = req.body.phone
  email = req.body.email
  address = req.body.address
  concern = req.body.desc
  
  let outputToWrite = `The name of the client is ${name}, Email: ${email}, Phone Number: ${phone},Residing at ${address}.His concern is: ${concern}`
  fs.writeFileSync('output.txt', outputToWrite)

  const params = {'message': 'your form has been submitted successfully'}
res.status(200).render('contact.pug', params)
})

// start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
}); 