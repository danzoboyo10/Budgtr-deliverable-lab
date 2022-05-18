const express = require('express');
const budget = require('./models/budget.js');

const app = express();

const port = 3000;



//index
app.get('/budget', (req, res) =>{
    res.render('index.ejs', {'budget': budget})
})

// New
app.get("/budget/new", (req, res) => {
    res.render('new.ejs')
})

//Create 
app.post("/fruits", (req, res) => {
    
})

//show 
app.get('/budget/:index', (req, res) =>{
    res.render('show.ejs', {
        budget: budget[req.params.indexOfBudgetArray]

    });
});

















app.listen(port, () =>{
    console.log(`listening on port`, port)

})