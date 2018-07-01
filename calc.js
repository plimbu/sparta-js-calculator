console.log("hello world");


//main() variables
var name;
var loop = true;
var userchoice;

//calc variables
var number_1;
var number_2;
var number_3;
var answ;
var operator;
var imperial;

//loop begins
while(loop === true)
{

//prompt to ask if they would like to use basic calculator or advanced calulcator
name = prompt("Type \n(b) to run basic calculator and \n(a) to run advanced calculator and \n(c) to run bmi calculator");
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

//bmi calculator
case "c":
//user inputs operator choice, used 5 and 6 instead of 1 and 2 so that we didn't need to use 2 switch statements, this was a design choice made to make the code more effecient
operator = prompt("What operator would you like to use ?\n BMI metric = (7)\n BMI imperial(inches and pounds) = (8) ");
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


//BMI metric
case "7":


  //get number input
  number_1 = prompt("enter weight ");
  number_2 = prompt("enter height");
answ = (+number_1/+number_2)/+number_2;
alert("BMI = "+answ);
break;

//BMI empirical
case "8":


  //get number input
  number_1 = prompt("enter weight(stones) ");

  number_2 = prompt("enter what feet your height is e.g (5) for 5ft 7 inches");
  number_3 = prompt("enter how much inches your height has e.g (7) for 5ft 7 inches ");

//first get inches from height
number_2 = +number_2*12;
number_2 = +number_2 + +number_3;

//convert stones and inches to kg and metres
number_2 = +number_2 * 0.0254;
number_1 = +number_1 * 6.35029;

answ = (+number_1/+number_2)/+number_2;
alert("BMI = "+answ);
break;


}

userchoice = prompt("type (y) to use caclulator again, else press (n) to exit")
if(userchoice == "n")
{
  loop = false;

}


}//end of loop
