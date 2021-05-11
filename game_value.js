function sendme(){
    Number_1=document.getElementById("num-1").value;
    Number_2=document.getElementById("num-2").value;
    actual_ans= parseInt(Number_1)*parseInt(Number_2);
}
question_num = '<h4>' + Number_1 + 'X' + Number_2 + '</h4>';
 inputbox = "<br>Answer : <input type='text' id='input_check_box'>";
 check_botton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row = question_number + input_box + check_button ;
 document.getElementById("output").innerHTML = row;
 document.getElementById("number1"). value ="";
 document.getElementById("number2"). value ="";
