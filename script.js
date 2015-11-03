var i=0;
var num1=null;
var num2=null;
var op=null;
var num_array=[""];

function calculate(){
    for(i=0; i<num_array.length;i++)
    {
        if(!isNaN(num_array[i]))
        //is a number
        {
            if(num1===null) {
                num1=num_array[i];
                console.log(num1);
            }
            else{
                num2=num_array[i];
                console.log(num2);
            }
        }
        else{
            //is an operator
            op=num_array[i];
            console.log("looper working");
        }
        if(!num1===null && !num2===null && op===null ){
            console.log(num1,num2,op);
            perform_math(num1,op,num2);
            num_array.splice(num_array.length-1, 2);
            return;
        }
    }
}

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
        return_number(num_array[i]);
    });

$(".operator").on("click", "button",function()
{
    increment_array_index();
    var button_value=$(this).text();
    input_digit(button_value);
    increment_array_index();
    console.log("operator is working");
    return_number(button_value);
});

$(".equals").on("click", "button", function(){
    calculate();
    perform_math(num1,op,num2);
    console.log("equal working");
});

});

function perform_math(num1,op,num2){
    switch(op) {
        case "+":
            var result=parseInt(num1) + parseInt(num2);
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
    num_array.push(result);
    return_number(result);
    console.log(result);
}

function return_number(result) {
    switch (result) {
        case undefined:
            $('#display_screen').html("");
            break;
        default:
            $('#display_screen').html(result);
            break;
    }
}

$(document).ready(function () {
    $("#clear_area").on("click", "button",function()
    {
        var value=$(this).text();
        switch (value) {
            case 'AC':
                clear_all();
                return_number("");
                console.log("clear");
                break;
            case 'C':
               clear();
                return_number("");
                console.log("clear clear")
        }
    });
})


function clear_all(){
    i=0;
    num1=null;
    num2=null;
    op=null;
    num_array=[""];
}

function clear(){
    num_array.pop();
    num_array.push("");
}