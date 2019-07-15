//going to console.log everything to keep track with each calculation


function tipCalculator(){
    var name = prompt("Hello! What's your name?");
        console.log(name);
    var checkAmount = Number(prompt("Ok " + name + " what was the check amount?"));
        console.log(checkAmount);
    var tipPercent = Number(prompt('What percentage of tip would you like to leave?'));
        console.log(tipPercent);
    var tip = checkAmount * (tipPercent / 100);
        console.log(tip)
    var total = (checkAmount + tip).toFixed(2);
        console.log(total)
console.log(name + ", your total for this service including tip is " + total);
alert(name + ", your total for this service including tip is $" + total);
}

tipCalculator();

//Things to troubleshoot.

//if you don't use the Number method for the prompt Javascript will return a string and when you do calculations it will add the two numbers as those they were text. 
//the .toFixed(2) method rounds the amount to two decimal places. 
