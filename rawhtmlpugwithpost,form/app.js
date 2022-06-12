const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs")
const port = 80;
// express specific stuff
 app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())

// pug specific stuff
 app.set('view engine', 'pug')  //  set the temlate engine as pub
 app.set('views',path.join(__dirname,'views')) //  view path
 

// end points
app.get('/',(req , res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
res.status(200).render('index.pug', params)
})
app.post('/',(req , res)=>{
    name = req.body.name
    email = req.body.email
    password = req.body.password
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, email: ${email}, password: ${password},  ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
  
    const params = {'message': 'your form has been submitted successfully'}
res.status(200).render('index.pug', params)
})

// start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
