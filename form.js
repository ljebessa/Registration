//jshint esversion:6
var port = process.env.port || 3000;
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");
//const geohash = require("geohash");
//const path = require("path");

const app = express();
//app.use(bodyParser.urlencoded({extended: true}));
 app.set('view engine', 'ejs');
app.use(express.static('public'));
  app.use(bodyParser.urlencoded ({extended: true}));
//app.set('views', path.join(--__dirname,'views');



 app.get("/", function(req, res){
    res.status(200);
   res.sendFile(__dirname + "/form.html");
  });


app.post("/", function(req, res){

res.render('confirmationResult', {data: req.body});
  var firstName = req.body.FirstName;
  var middleName = req.body.MiddleInitial;
  var lastName = req.body.LastName;
 var email = req.body.Email;
 var add1 = req.body.Address1;
 var add2 = req.body.Address2;
 var city = req.body.City;
  var state = req.body.State;
  var zip = req.body.Zip;
  var edu = req.body.Education;
  var income = req.body.Salary;
  var phone = req.body.Phone;




    var data = {

      members: [
      {

        email_address: email,
        status: "subscribed",
        merge_field: {

        FNAME: firstName,
        LNAME: lastName,
        ADDRESS: add1,
        MMERGE8: add2,
      //  PHONE: phone;,
      //  City:,
      //  State:,
        MMERGE10: zip


        }
      }
    ]





    };
//     Google map api key
// AIzaSyAP1Ry5U_HgBzggmw8h2LPbx8x957yOMUs
    var jsonData = JSON.stringify(data);

    var option = {

      url: "https://us3.api.mailchimp.com/3.0/lists/0a9f0af0fe",
      method: "POST",
      headers: {
        "Authorization": "Lidiya 4c621f505ad2dbbb724aeac65410e6d6-us3"
      },
      body: jsonData

    };

      var option1 = {

      url: "https://www.google.com/recaptcha/api/siteverify",
      method: "POST",
      headers: {
        "Authorization": "Lidiya 6LcL1a8UAAAAAC3Xlmrm4Z0V31d9rDpxFV0ZIQ34"
      },
      body: jsonData

    };

  // request(option, function(error, response, body){
  //
  //       if(error) {
  //
  //         res.sendFile(__dirname + "/failure.html");
  //       }
  //       else {
  //         if(response.statusCode === 200) {
  //           res.sendFile(__dirname + "/views/confirmationResult.ejs");
  //         }else {
  //           res.sendFile(__dirname + "/failure.html");
  //         }
  //       }
  //
  //     });

});





app.listen(3000, function(){
  console.log("server is runniong on port 3000");
});


//4c621f505ad2dbbb724aeac65410e6d6-us3
//0a9f0af0fe
