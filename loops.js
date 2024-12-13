const balance = 1000
if (balance >200) console.log("tesst");


const name = true 
const debit = true


if (name && debit){
    // console.log("allow to buy course");
}
// **************************************************************************************************8888
const logggedin = true
const loggedoff = false

if (logggedin|| loggedoff){
    // console.log("user logged in")
}

// ****************************************************************************************************************************************************************
// Switch case statement

const month = 3

switch(month){
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("marvh")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("jun")
        break;

        default:
            console.log("deaffault case ")
}
// --------------------------------------------------------------------------------------------------------------------------------

let myArray = ["shivraj","mahes","hitesh"]

for(let index = 0 ; index< myArray.length; index++){
    const store = myArray[index]
    // console.log(store)
}

// while loop
// let index = 0
// while (index < 10){
//     console.log(`valuse is ${index}`)
//     index++
// }
// -------------------------------------------------------------------------------------
const myarry2 =["fefrf","454tty","et5t4trt"]

let index = 0
while (index < myarry2.length){
    // console.log(`valuse is ${myarry2[index]}`)
    index++
}


let match = 0

do{
    // console.log(`shivraj${match}`)
    match++
}while(match <= 10)
    // ---------------------------------------------------------------------------------------------------------------------

    const shirvraj1 = "shivrawj jaa"
    for (const shiv of shirvraj1) {
        
        // console.log(`dekthe hai ek ${shirvraj1}`)
        break

    }

    const shirvraj2 = "shivrawj jaa"
    for (const shiv of shirvraj2) {
        // if(true)
        // console.log(`dekthe hai ek ${shiv}`)  
    }

    // 33333333333333333333333333333333333333333###################################################################
    // Map

    const map = new Map()

    map.set('us',"usa")
    map.set('in',"india")
    map.set('fr',"france")
    map.set('br',"brazil")

    console.log(map)

    for (const [key]of map) {
        console.log(key)
        
    }
// sirf keys print honge
  