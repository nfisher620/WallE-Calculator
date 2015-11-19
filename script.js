var i=0;
var num1=null;
var num2=null;
var op=null;
var num_array=[""];

function calculate(){
    console.log("calculate ran");
    for(i=0; num_array.length>1;i++)
    {
        if(!isNaN(num_array[i]))
        //is a number
        {
            if(num1===null) {
                num1=num_array[i];
                console.log(num1);
            }
            else if(num2===null){
                num2=num_array[i];
                console.log(num2);
                if(num2===""){
                    num2=num1;
                }
            }
        }
        else{
            //is an operator
            op=num_array[i];
        }
        if(num1!==null && num2!==null && op!==null ){
            console.log("in last conditional: " + num1,num2,op);
            var result = perform_math(num1,op,num2);
            num_array[i - 2] = result;
            num_array.splice(i-1,2);
            i=-1;
            num1=null;
            num2=null;
            //op=null;
            console.log('result is: ' + result);
        }
    }
    return_number(result);
}

// Want to add a conditional that will look for another operator in the array. If the operator exists, run calculate function and place the result into num_array[0]
function input_digit(math_string){
    num_array[i] += math_string;
    /*if(math_string == /*operator variable){

    }*/
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
    return_number(button_value);
});

$(".equals").on("click", "button", function(){
    calculate();
    i=0;
    //perform_math(num1,op,num2);
    console.log("equal working");
});

});

// This function takes in 3 arguments num1 = int, op = string, num2 = int. depending on the operator, it will perform the applicable math.
function perform_math(num1,op,num2) {
    var result = num1;
    if (num1!== null && num2 == null && op == null) {
        result = num1;
        return_number(result);
        console.log("here");
    }
    else {

        switch (op) {
            case "+":
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case "-":
                result = parseFloat(num1) - parseFloat(num2);
                break;
            case "*":
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case "x":
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case "/":
                if (num2 === "0") {
                    result = "Error";
                    break;
                }
                result = parseFloat(num1) / parseFloat(num2);
                break;
        }
        return result;
        //num_array.push(result);
        //return_number(result);
        //console.log(result);
    }
}

function return_number(result) {
    console.log("return number ran");
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
    $(document).keyup(function(event) {
        //* = 106
        // /= 111
        // - = 109
        // + = 107
        //added decimal to 110, was blank and zero
        var op_codes = ['*', '', '+', '-', '.', '/', '*', '+','-', '/', '.'];
        var op_values = [106, 108, 107, 109, 110, 111, 56, 187,189, 191,190];
        console.log("which, shift ", event.which, event.shiftKey,(event.which==187 && event.shiftKey));
        if (event.which >= 96 && event.which <= 105) {
            input_digit('' + (event.which - 96));
            return_number(num_array[i]);
        }
        else if(event.which == 13 || event.which==187 && event.shiftKey==false){
            calculate();
        }
        else if (event.which ==110 || event.which ==190){
            var char = op_codes[op_values.indexOf(event.which)];
            input_digit(char);
            return_number(char);
        }
        else if((event.which==56 || event.which==187) && event.shiftKey){
            //calculate();
            console.log("shift working");
            increment_array_index();
            var char = op_codes[op_values.indexOf(event.which)];
            input_digit(char);
            increment_array_index();
            return_number(char);
        }
        else if (event.which >=48 && event.which<=57){
            input_digit('' + (event.which-48));
            return_number(num_array[i]);
            }
        else if (op_values.indexOf(event.which) != -1) {
            var char = op_codes[op_values.indexOf(event.which)];
            increment_array_index();
            input_digit(char);
            increment_array_index();
            return_number(char);
        }
        });
        //switch(event.which){
        //    case 13:
        //    case 187:
        //        if(!event.shiftKey){
        //            calculate();
        //            break;
        //        }
        //    case 56:
        //        if(event.shiftKey){
        //            console.log("shift working");
        //            increment_array_index();
        //            var char = op_codes[op_values.indexOf(event.which)];
        //            input_digit(char);
        //            increment_array_index();
        //            return_number(char);
        //        }
        //        break;
        //    default:
        //}
});

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