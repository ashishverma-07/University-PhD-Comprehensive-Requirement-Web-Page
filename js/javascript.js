const inputs = document.querySelectorAll('.grade');
const final = document.querySelector('#finalGPA');
const button = document.querySelector('input[type="button"]');
button.addEventListener('click', checkGrades, false);

const gradeMap = {
  "A": 4,
  "A-":3.7,
  "B+":3.3,
  "B": 3,
  "B-": 2.7,
  "C+": 2.4,
  "C": 2.1,
  
}

function checkGrades() {
  final.textContent = [...inputs].reduce((total, grade) => {
    total += gradeMap[grade.value.toUpperCase()]/4;
    return Math.round(total * 100) / 100;
  }, 0);
}


// THE FOLLOWING CODE INSERTS THE DATA INTO MYSQL
// WE WILL HAVE TO PROVIDE THE RESPECTIVE username, password etc. TO GIVE SUITABLE DATABASE CONNECTION


/*
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "test"
});

router.post('/submitform', function(req, res, next) {
    console.log(req.body.prof_id);
    console.log(req.body.stuid_id);
    console.log(req.body.comments);
    con.connect(function(err) {
  if (err) throw  err;
  console.log("connected");
  var sql = "INSERT INTO `form`(`prof_id`,`stud_id`, `comments`) VALUES ('"+req.body.prof_id+"','"+req.body.stud_id+"','"+req.body.comments+"')";
  con.query(sql, function(err, result)  {
   if(err) throw err;
   console.log("table created");
  });
});

  res.render('index', { title: 'Express' });
});


module.exports = router;
*/
