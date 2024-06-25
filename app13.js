// const arr = [23, 65, 76, 233, 58, 79];


// //? HOF
// const newArr02 = arr.map( (val, _index) => {
//     return val * 2 ;
// })

// console.log(newArr02) ;




// const canVote = (age) => {  
//     return age >= 18;
// }

// function myfunc() {
//     var filtered = [10, 14, 33, 16, 40].filter(canVote);
//     console.log("eligible voters: ", filtered);
// }

// myfunc();



const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

function positiveNumbers(numbers) {

    console.log(numbers.filter(el=>el > 0));

}

positiveNumbers(numbers);