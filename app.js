// q1
// var user = prompt("Enter a positive integar");
// document.write("number: ", user, "<br>");
// document.write("Round off value: " , Math.round(user), "<br>");
// document.write("Floor value: " , Math.floor(user), "<br>");
// document.write("Ceil value: " , Math.ceil(user), "<br>");

// q2
// var user = prompt("Enter a negative integar");
// document.write("number: ", user, "<br>");
// document.write("Round off value: " , Math.round(user), "<br>");
// document.write("Floor value: " , Math.floor(user), "<br>");
// document.write("Ceil value: " , Math.ceil(user), "<br>");

// q3
var num1 = -4
var num2 = 5
document.write("The absolute value of ", num1," ", "is ", Math.abs(num1), "<br>")
document.write("The absolute value of ", num2," ", "is ", Math.abs(num2), "<br>")

// q4
var dice = Math.random()*6+1;
document.write("Random dice value: " , Math.floor(dice) , "<br>");

// q5
var coin = Math.random()*2+1;
var tossed = Math.floor(coin);
document.write(tossed , "<br>");
if(tossed === 1){
    document.write("Randon coin value: Heads <br>")
}
else if(tossed === 2){
    document.write("Randon coin value: Tails <br>")
}

// q6
var random = Math.random()*100+1;
var randomNum = Math.floor(random);
document.write("Random number between 1 and 100: ", randomNum, "<br>")

// q7
// var weight = parseFloat(prompt("Enter your weight"));
// document.write("The weight of user is: ", weight, " ", "kilograms <br>")

// q8
var user = +prompt("Enter a number between 1 and 10")
var secret = Math.random()*10;
var toss = Math.floor(secret) +1;
if(user === toss){
    alert("Congratulations!")
}else{
    alert("Try again")
}
