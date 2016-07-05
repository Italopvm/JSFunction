/*exercise 1

function tripleFive(){
	for(var i=0; i <3; i++){
		console.log('five!');
	}
}
tripleFive();


function lastLetter(){

}*/


/*exercise 2

function lastLetter(string,){
      var length = string.length;
      
      console.log(string.charAt(length - 1));
}

lastLetter('Hello');
lastLetter('Island');
lastLetter('Bad');
lastLetter('345');*/

/*exercise 3

function square(number){
	console.log(number * number);
}
square(3);*/

/*exercise 4

function negate(number){

	console.log(-number) 

}

negate(100);
negate(5);
negate(-8);*/



/*==========Exercise 5===========*/
// function toArray(num1, num2, num3){
	

// 	var numbers = []; 

// 	numbers.push(num1);
// 	numbers.push(num2);
// 	numbers.push(num3);

// 	console.log(numbers);


// }

// toArray(1, 4, 5);
// toArray(8, 9, 10);
// toArray('one', 'two', 'three');

/*----------- exercise 6 ------------*/

// function startWithA(first){
// 	var ltrOne = first.charAt(0);
// 	if(ltrOne.toLowerCase() == "a"){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
	

// }


// console.log(startWithA('aardvarak'));
// console.log(startWithA('cat'));


/*-------------- exercise 7 ---------------*/


/*console log option A*/

// function excite(word){
// 	var triple = word + '!!!';
// 	return triple;
// }

// console.log(excite('Hi'))
// console.log(excite('dogs'))
// console.log(excite('computers'))


/*console log option B*/

// function excito(word){
// 	var tres = word + '!!!';
// 	console.log(tres);
// }

// excito('Hi');
// excito('dogs');
// excito('pineapples');


/*----------------- exercise 8 ---------------*/

function sun(palabra){
	var word = palabra.indexOf('sun');
	if(word != (-1)){
		return true;
	}
	else{
		return false;
	}

}

console.log(sun('sunshine'));
console.log(sun('beer'));
console.log(sun('music'));
console.log(sun('sunny'));










