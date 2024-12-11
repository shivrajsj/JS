const jsuser ={
name: "shivraj",
age : 34,
location : "pune",
email : "Shivrajgoogle.com",
isLoggedIn : false,
lastLoginDays :["monday",["saturday"]]

}

console.log(jsuser.email)

console.log(jsuser["email"])
//["email"] yea string mai hi likhna padega q ki jab object pe define kiya hai tab vo usko string samjta hai

/*********************************************************************************************************88888 */
// ab ek or example hai ki hum .se q nahi access le sakte 
/*const jsuser_new ={
    name: "shivraj","full name": "shivraj jadhav",
    age : 34,
    location : "pune",
    email : "Shivrajgoogle.com",
    isLoggedIn : false,
    lastLoginDays :["monday",["saturday"]]
    
    }
    //jab maine . se use kiya to hua lagata new version mai hota hai
    console.log(jsuser_new["full name"])*/

    const MY_Symbol = Symbol ("key1")
    const jsuser_new ={
        name: "shivraj","full name": "shivraj jadhav",
        age : 34,
        [MY_Symbol]: "my key2",
        location : "pune",
        email : "Shivrajgoogle.com",
        isLoggedIn : false,
        lastLoginDays :["monday",["saturday"]]
        
        }
        console.log(jsuser_new[MY_Symbol])
        console.log(typeof MY_Symbol)

        /******************************************************************************8 */

        //to change in object 
        jsuser_new.email = "maheshgoogle.com"
        console.log(jsuser_new);


        // to freeze the object we use .freeze
        Object.freeze(jsuser_new)

        /*********************************************************** */