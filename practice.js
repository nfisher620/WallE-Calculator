/**
 * Created by nicolespence on 11/1/15.
 */




function perform_math(num1,op,num2){
    switch(op) {
        case "+":
            var result=num1 + num2;
            break;
        case "-":
            var result=num1 - num2;
            break;
        case "x":
            var result= num1 * num2;
            break;
        case "/":
            var result= num1/num2;
            if(num2===0){
                alert("Error!");
            }
            break;
    }
    var result;
    alert(result);
}


var num1=prompt("Give me 1st number");
num1=parseInt(num1);
alert (num1);

var op=prompt("What operation would you like to perform?");

var num2=prompt("Give me 2nd number");
num2=parseInt(num2);
alert(num2);



perform_math(num1,op,num2);


var values=[];
var val=null;
while(val !== ''){
    val = prompt('gimme a val');
    values.push(val);
    values.pop();
}
console.log(values);


$(document).ready(function(){
    $(".number_container").on("click", "button",function(){
        console.log($(this).text()
        );
    });
});




var i=0;
var num_array=[''];
function input_digit(number_string){
    num_array[i] += number_string;
    console.log(num_array);
}

function increment_array_index(){
    i+=1;
    num_array.push("");
}

$(document).ready(function(){
    $(".number_container").on("click", "button",function(){
        console.log($(this).text());
        var button_value=$(this).text();
        input_digit(button_value);

    });
    $("#enter").click(function(){
        increment_array_index();
    })
});





num1=null;
num2=null;
op=null;

for(i=0; i<num_array.length;i++)
{
    if(!isNaN(num_array[i]))
    //is a number
    {
        if(num1===null) {
            num1 = num_array[i];
        }
        else{
            num2=num_array[i];
        }
    }
    else{
        //is an operator
        op=num_array[i];
    }
}

for(i=0; i<num_array.length;i++)
{
    if(!isNaN(num_array[i]))
    //is a number
    {
        if(num1===null) {
            num1 = num_array[i];
            console.log(num1)
        }
        else{
            num2=num_array[i];
        }
    }
    else{
        //is an operator
        op=num_array[i];
    }
    if(!num1===null && !num2===null && op===null )
        perform_math(num1,op,num2);
}



/*code in js bin*/
var i=0;
var num1=null;
var num2=null;
var op=null;
var num_array=[""];

function input_digit(number_string){
    num_array[i] += number_string;
    console.log(num_array);
}

function increment_array_index(){
    i+=1;
    num_array.push("");
}

$(document).ready(function(){
    $(".number_area").on("click", "button",function()
    {
        console.log($(this).text());
        var button_value=$(this).text();
        input_digit(button_value);
    });


    $(".operator").on("click", "button",function()
    {
        console.log('you will respect my authority');
        increment_array_index();
        var button_value=$(this).text();
        console.log('button value is ',button_value);
        input_digit(button_value);
        increment_array_index();
    });


    $("#equal").on("click", "button", function()
    {
        if (num_array.length==3)
        {
            perform_math(num1,op,num2);
            num_array[0]= result;
        }
    });
});
function perform_math(num1,op,num2){
    switch(op) {
        case "+":
            var result=num1 + num2;
            break;
        case "-":
            var result=num1 - num2;
            break;
        case "x":
            var result= num1 * num2;
            break;
        case "/":
            var result= num1/num2;
            if(num2===0){
                alert("Error!");
            }
            break;
    }
    var result;
    alert(result);
}


