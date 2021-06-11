var express = require('express');
var query = require('./query');
var mysql = require('mysql');

var app = express();
app.use(express.json());

// notice the async keyword, it needs to be here
app.get("/users/?", async function (request,response, next){

  //BACK AT 2:32 
  //use request.query.lastname for the user input
//https://demonstratemysqlandexpress.jonwoo.repl.co/users?lastname=yum
  let sql = "SELECT * FROM users WHERE last_name = ?";
  let lastname = request.query.last_name
  const replacement = [lastname];
  sql = mysql.format(sql, replacement)

  console.log(lastname)
  //Make sure to use mysql format()
  var users = await query(sql);

console.log(users);
  response.json(users);


});

app.listen(3000, () => console.log('server started'));