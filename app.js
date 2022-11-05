const express = require("express");
const https = require("https");
const cors = require("cors");


const app = express();

//This is to receive the json data from the post Request
app.use(express.json({type: "application/json"}));
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
  if(!req.body){
    return res.json({
      slackUsername: "Tunmicrypt",
      error: "All arqameters must be met"
    })
  }
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



//This sends the response back to the client
return  res.header('Content-Type','application/json').status(200).json({
  slackUsername: "Tunmicrypt",
  result: result,
  operation_type: operator
})
})

//This shows that the server is running
app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(err);
  else console.log("Server listening at port 3000");
})
