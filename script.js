function return_number(type, value, item) {
    switch (value) {
        case undefined:
            $('#display_screen').html("");
            break;
        //displays value(number or operator) on screen
        default:
            $('#display_screen').html(value);
            break;
    }
}
// my_calculator - creates a new calculator object
var my_calculator = new calculator(return_number);
//add click handlers to all buttons
$(document).ready(function () {
    $('button').on('click', function () {
        var val = $(this).text();
        switch (val) {
            case 'AC':
                my_calculator.allClear();
                break;
            case "C":
                my_calculator.clear();
                break;
            default:
                my_calculator.addItem($(this).text());
                break;
        }
    });
})
//Jquery Objects//
/*var display_area= $("div").addClass("display_screen");
var number_area = $("div").addClass("number_area");
var button_7 = $("button").addClass("btn btn-default").value(7);
var button_8 =$("button").addClass("btn btn-default").value(8);
var button_9 =$("button").addClass("btn btn-default").value(9);
var button_6 =$("button").addClass("btn btn-default").value(6);
var button_5 =$("button").addClass("btn btn-default").value(5);
var button_4 =$("button").addClass("btn btn-default").value(4);
var button_1 =$("button").addClass("btn btn-default").value(1);
var button_2 =$("button").addClass("btn btn-default").value(2);
var button_3 =$("button").addClass("btn btn-default").value(3);
var button_period =$("button").addClass("btn btn-default").value(".");

number_area.append(button_1,button_2,button_3,button_4,button_5,button_6,button_7,button_8,button_9,button_period);*/

/*var my_calculator = new calculator(calculator_run);


 function calculator_run(type, value, error) {
     if (value == "undefined") {
         $("#display_screen").html("");
     } else
         $("#display_screen").html(value);
}

$(document).ready(function(){
    $("button").on("click", function() {
        var val = $(this).text();
        if (val == "AC") {
            my_calculator.allClear();
        } else {
            my_calculator.addItem($(this).text());
        }
    )}*/
