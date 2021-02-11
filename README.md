# Weather-Journal App Project

*This project create an asynchronous web app that uses Web API and user data to dynamically update the UI
with the tempreture ,the date of the day and the feeling of the user 

##Project Environemnt
This project uses Node and Express environemnts.
The project file server.js requires express(),then create an instance of the app using express.
configuring express to use body-parser as middle-ware
require Cors packages for cross origin allowance
Initialize the main project folder to point to "website" folder which contain .html, .css, and .js files.
 
### Local Server
Create a server running on the port 3000 (you can choose any numbers)
 server is running using Node in the terminal using the command > node server.js
 add a POST route that adds incoming data to projectData
 Use express get method to send data from server endPoint to browser.(Get route)
 the url of the project is:  http://localhost:3000

#### API Credentials
create an account on https://openweathermap.org to get an API key and the  URL:
api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
by deleting the country code the default will be the USA

##### Add an event listener for the element with the id: generate, with a callback function(takeAction) to execute when it is clicked.
after checking if the user enter the zip code ===>>chaining promises
getTemp function to fetch the API and get tempreture then postData to our local server then update the UI
