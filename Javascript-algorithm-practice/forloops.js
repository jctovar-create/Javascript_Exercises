console.log("Print out the numbers from -10 to 19")

for(var i = -10; i <20; i++){
	console.log(i);
}

console.log("Print out the even numbers from 10 to 40")

for(var i = 10; i <=40; i++){
	if (i % 2 === 0) 
	console.log(i);
}

console.log("Print out the odd numbers from 300 to 333")

for(var i = 300; i <= 333; i++){
	if (i % 2 !== 0) 
	console.log(i);
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 40")

for(var i = 5; i <= 50; i++){
	if (i % 5 ==- 0 && i % 3 === 0) 
	console.log(i);
}

console.log("Print all numbers divisible by 5 OR 3 between 5 and 40")

for(var i = 5; i <= 50; i++){
	if (i % 5 === 0 || i % 3 === 0) 
	console.log(i);
}