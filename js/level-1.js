//question 1
var myName = 'Moises';

//question 2

var person = {
	name: 'Jhon',
};

//question 3
var outOfStock = 'false';

if (outOfStock === true) {
	console.log('out of stock');
} else {
	console.log('in stock');
}

//question 4

var myNumbers = [1, 2, 3, 4, 5];

for (var i = 1; i <= myNumbers.length; i++) {
	console.log(myNumbers.length);

	console.log(myNumbers[0]);

	console.log(myNumbers[1]);

	console.log(myNumbers[2]);

	console.log(myNumbers[3]);

	console.log(myNumbers[4]);
}

// question 5

for (var counter = 15; counter <= 25; counter++) {
	console.log(counter);

	// question 6

	if (counter === 20) {
		console.log(counter);
	}
}

// question 7

var myFriends = [
	{
		name: 'Cris',
		age: 29,
		christian: 'false',
	},

	{
		name: 'Camilo',
		age: 32,
		christian: 'true',
	},
];

for (var i = 0; i < myFriends.length; i++) {
	console.log(myFriends[i].age);
}

for (var i = 0; i < myFriends.length; i++) {
	console.log(myFriends[i].christian);
}

// question 8

function whatIDontLike(tasteOf) {
	console.log('i dont like ', tasteOf);
}

whatIDontLike('passion fruit');

// question 9

function subtractObjects(object1, object2) {
	var subtraction = object1 - object2;
	console.log(subtraction);
}

subtractObjects(10, 7);

//question 10

var myArray = [];

function functionArray(addToArray) {
	console.log(addToArray);
	myArray = addToArray;
}

functionArray.call({ make: 'coffee' }, 'icecream');
