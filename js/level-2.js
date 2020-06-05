//question 1

for (var counter = 15; counter <= 25; counter += 2) {
	console.log(counter);
}

//question 2

function thisIsMyFunction(firstFunction) {
	console.log(firstFunction);
}

thisIsMyFunction('I am a Function');

var innerFunction = thisIsMyFunction;

function outerFunction(secondFunction) {
	secondFunction(2);
}

outerFunction(innerFunction);
