const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs")
const port = 8000;

// express specific stuff
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())

// pug specific stuff
 app.set('view engine', 'pug')  //  set the temlate engine as pub
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

// start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
}); 