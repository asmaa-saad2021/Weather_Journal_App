/* Global Variables */
const apiKey="62d6d400a62421624e8642e9071af8d1";

const baseURL="http://api.openweathermap.org/data/2.5/weather";

//zip code & feeling variable
let zipCode=document.getElementById("zip");
let feeling=document.getElementById("feelings");

// Create a new date instance dynamically with JS
let d = new Date();
//add 1 to getMonth to start months from 1 not 0
let newDate =( d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();



 //getTemp to fetch temprature from weather API
 const getTemp= async (zipcodeEntered)=>{
  /*api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key} 
 * 1)delete country code 2)change zip buy the zip code that user has entered 
 * 3)API key ==>> apiKey
 * 4) add &units=metric 
*/
       const url=baseURL+`?zip=${zipcodeEntered}&appid=${apiKey}&units=metric`;
       //console.log(url);
       const res=await fetch(url)
       try{
           //convert json data to js object (await conversion)
         const data=await res.json() ;
         console.log("the function getTemp fetch url and bring data");
         console.log(data);
         return data 
       }catch (error){
           console.log("error",error);
       }
         
   }

 // postData to the local server
 const postData =async(url = "",data ={})=>{
   //code to fetch route url and write POST method
   //method,credential ,headers ,and body
   const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
  try {
    
    return 
  }catch(error) {
  console.log("error", error);
  }
 } 

 //to update UI
 const updateUI =async ()=>{
   //code to fetch data from local server
   //use url from Get route 
   const request=await fetch('/all')
   try{
     //code to convert json data (await conversion)
     const allData= await request.json();
     // code to update the UI with fetched data
     const dateDiv=document.getElementById('date');
     dateDiv.innerHTML=`&#128198 Today's date is : ${allData.date}`;
     const tempDiv=document.getElementById('temp');
     tempDiv.innerHTML=`&#127777 The Temprature is : ${allData.temp} &#8451`;
     const ContentDiv=document.getElementById('content');
     ContentDiv.innerHTML=`&#128151 Your feeling is : ${allData.content}`;


   }catch{
    console.log("error", error);

   }
 }
// select the generate button
const generateBtn=document.getElementById("generate");
//add event listener on the button to detect the click
generateBtn.addEventListener('click',takeAction);
// takeAction is a function to perform what will happen after clicking button
function takeAction (){
 
// object variable to carry data: zip code ,feeling ,and date
 let data={
ZIPcode : zipCode.value,
content : feeling.value,
date: newDate
 };
  
 console.log('the data object after clicking the button',data); 
//check if the user forget to input the zipcode
if (data.ZIPcode===""){
    alert('Please Enter the zip code')
 }else{
   //chaining promises
   getTemp(data.ZIPcode).then(dataOfAPI =>{
    data.temp=dataOfAPI.main.temp; 
    postData('/addData',data)} ).then (() => updateUI() );
   
 }
}