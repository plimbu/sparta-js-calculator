console.log("hello world");


//main() variables
var name;
var loop = true;
var userchoice;

//calc variables
var number_1;
var number_2;
var answ;
var operator;

//loop begins
while(loop === true)
{

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

//user inputs operator choice, used 5 and 6 instead of 1 and 2 so that we didn't need to use 2 switch statements, this was a design choice made to make the code more effecient
operator = prompt("What operator would you like to use ?\n power = (5)\n square root of first number user enters = (6) ");

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


//power
case "5":
answ = Math.pow(+number_1, +number_2)
alert(number_1+" ^ "+number_2 +" = "+answ);
break;

//root
case "6":
answ = Math.sqrt(+number_1);
alert( "squareroot("+number_1 + ") = "+answ);
break;



}

userchoice = prompt("type (y) to use caclulator again, else press (n) to exit")
if(userchoice == "n")
{
  loop = false;

}


}//end of loop
