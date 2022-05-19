const express = require('express');
const budget = require('./models/budget.js');

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: false }))


//index
app.get('/budget/', (req, res) =>{
    res.render('index.ejs', {'wholeBudget': budget})
})

// New
app.get("/budget/new/", (req, res) => {
    res.render('new.ejs')
})

//Create 
app.post("/budget/", (req, res) => {
    console.log(req.body)
    budget.push(req.body)
    res.redirect("/budget")
    

})

//show 
app.get('/budget/:index/', (req, res) =>{
    res.render('show.ejs', {
        showBudget: budget[req.params.index]

    });
});

















app.listen(port, () =>{
    console.log(`listening on port`, port)

})