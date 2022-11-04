const express = require("express");
const https = require("https");

const app = express();

//This is to receive the json data from the post Request
app.use(express.json({type: "application/json"}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
  console.log(req.body);
const x = req.body.x;
const y = req.body.y;
const operator = req.body.operation_type
var result;

//The if statements are to ensure the variables are integers and the
// operators are either add, subtract or multiply
if(Number.isInteger(x) === true && Number.isInteger(y) === true){

  if(operator === "addition") {
     result = x + y;
    console.log(result);
  } else if (operator === "subtraction"){
     result = x - y;
    console.log(result);
  } else if (operator === "multiplication") {
     result = x * y;
    console.log(result);
  } else {
    console.log("invalid operator");
  }

} else console.log("The numbers are not integers");


//This contains the response data that will be sent after the request has been processed
const resData = {
  slackusername: "Tunmicrypt",
  result: result,
  operation_type: operator
}

//This turns the response data into JSO
const jsonContent = JSON.stringify(resData);

//This sends the response back to the client
  res.end(jsonContent)
})

//This shows that the server is running
app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(err);
  else console.log("Server listening at port 3000");
})
