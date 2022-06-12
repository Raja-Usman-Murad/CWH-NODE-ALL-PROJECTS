
const express = require("express");
const app = express();
const path = require("path")
const port = 80;
 app.use('/static', express.static('static'))
//  set the temlate engine as pub
 app.set('view engine', 'pug')
//  view path
 app.set('views',path.join(__dirname,'views'))
//  our demo end point
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'hey usamn', message: 'Hello there! we use pug' })
})

app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Harry");
});

app.get("/about", (req, res)=>{
    res.status(300).send("This is about page of my first express app with Harry");
});

app.post("/about", (req, res)=>{
    res.status(400).send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
