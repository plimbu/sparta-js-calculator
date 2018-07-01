console.log("hello world");


//main() variables
var name;
var loop = true;

//calc variables
var number_1;
var number_2;
var answ;
var operator;


//prompt to ask if they would like to use basic calculator or advanced calulcator
name = prompt("Type (b) to run basic calculator and (a) to run advanced calculator");
switch(name)
{
  //basic caclulator
case "b":

//get operator input
//- Additon,- Multiplication, -Division, Subtraction
operator = prompt("What operator would you like to use ?\n addition = (1)\n subtraction = (2)\n multiplication = (3)\n division = (4) ");

//get number input
number_1 = prompt("enter number 1");
number_2 = prompt("enter number 2");
break;


//advanced calculator
  case "a":

//user inputs operator choice
operator = prompt("What operator would you like to use ?\n power = (1)\n square root = (2) ");

  //get number input
  number_1 = prompt("enter number 1");
  number_2 = prompt("enter number 2");
  break;



}



switch(operator)
{
  //basic calculator
//addition, gotto prepend numbers with + or - to make them numbers and not strings
case "1":
answ = +number_1 + +number_2;
alert(number_1+" + "+number_2 +" = "+answ);

break;

//subtraction
case "2":
answ = +number_1 - +number_2;
alert(number_1+" - "+number_2 +" = "+answ);
break;

//multiplication
case "3":
answ = +number_1 * +number_2;
alert(number_1+" X "+number_2 +" = "+answ);
break;

//division
case "4":
answ = +number_1 / +number_2;
alert(number_1+" / "+number_2 +" = "+answ);
break;


//advanced calculator






}
