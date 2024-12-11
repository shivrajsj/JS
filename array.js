//in javascript you can change the array size
const myArr = [0,2,2,3]

const myHeors = ["shaktiman ", "mahesh"]

const mynewArr = new Array(1,2,3,3,4)

//console.log(myArr[0]);
//***************************************************************************************** */
//array methods
//push method 
//myArr.push(6)
//myArr.push(7)
//console.log(myArr);


//[pop method]
//myArr.pop(0)
//console.log(myArr)
//***************************************"*************************************************************" */





//when you want to add the element in the staring poitn

//myArr.unshift(10)
//console.log(myArr)


//shift method delete the first element
//myArr.shift(3)
//console.log(myArr)


//*********************************************************************************** */
//console.log(myArr.includes(2));
//eska typeof booleen rahega 

//console.log(myArr.indexOf(9));
//console.log(myArr.indexOf(2));
/************************************************************************* */


 //how to join the new array to exsiting array
 //const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);

//console.log(typeof newArr);

//slice ,splice

const myn1 = myArr.slice(0,2)

console.log("A" , myArr)
console.log(myn1)

//splice includes the last range 

//splice operation remove the element in original array 
const myn2  = myArr.splice(0,3)
console.log("b" , myArr)
console.log(myn2)
