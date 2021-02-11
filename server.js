// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=3000;
const server=app.listen(port,()=>{
    console.log(`server is running on: http://localhost:${port}`)});

//post route
app.post('/addData',(req, res)=>{
    // code to add data to endpoint object
      console.log(req.body);    
        projectData.temp = req.body.temp;
        projectData.date = req.body.date;
        projectData.content = req.body.content;
       // console.log('projectdata after posting',projectData);
      
        
})  

//Get route
//Use express get method to send data from server endPoint to browser.
 app.get('/all', (req, res) => {
     console.log('projectData to update UI',projectData);
                res.send(projectData);
 })

