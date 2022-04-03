const express = require("express");
const app = express();
const requests = require("requests");
const path = require("path");
const hbs = require("hbs");
const fs = require ("fs");
const port = process.env.PORT || 8000;

//public statatic path 
const static_path = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const pertialsPath = path.join(__dirname, "../template/partials");
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(pertialsPath);



app.use(express.static(static_path));



app.get("/", (req, res)=>{
res.render("index")
})
app.get("/about", (req, res)=>{
    res.render('about')
    })
    app.get("/weather", (req, res)=>{
        res.render("weather")
 })
app.get("*", (req, res)=>{
     res.status(200).render("error",{
         msg:"Opps! Page Not Found"
     })
 })
app.listen(port, ()=>{
    console.log(`Running server is ${port}`);
})