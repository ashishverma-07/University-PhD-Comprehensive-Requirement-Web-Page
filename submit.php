<?php

$user_name = "";
$password = "";
$database = "";
$server = "";

mysql_connect("$server","$user_name","$password");

mysql_select_db("$database");


$order = "INSERT INTO comments

        (prof_id, stud_id, comments)

        VALUES

        ('$prof_id', '$stud_id', '$comments')";


$result = mysql_query($order);

if($result){

    echo("<br>Input data is succeed");

} else{

    echo("<br>Input data is fail");

}
?>