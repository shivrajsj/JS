//const marvel_heros = ["thor", "ironman", "spiderman"]
//const dc_heros = ["mai","tu","abkon"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

/***************************************************************** */
//spread operater

//const marvel_heros = ["thor", "ironman", "spiderman"]
//const dc_heros = ["mai","tu","abkon"]


//console.log(...marvel_heros,...dc_heros);

/*********************************************** */
//flat ese agar arrray k andar array ho to usko reslove karrna padta hai is liye flat use karte hai
const another_array  = [1,2,3,4,[5,6],[3,4,5],8]

const another_new_array = another_array.flat(Infinity)
console.log(another_new_array)


/**-------------------------------------------------------------------------------------------------------------------
 */

//how to check this is array or not 
console.log(Array.isArray("shivraj"))

// how to covert normal string to convert array 
console.log(Array.from("shivraj"))
// wee can also use the .of operater for this
let score1 = 100
let score2 = 300
let score3 = 200

console.log(Array.of(score1,score2,score3));