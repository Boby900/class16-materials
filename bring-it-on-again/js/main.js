// // *Variables*
// // Declare a variable, assign it a value, and alert the value
// let num = 10
// alert(num)
// // Create a variable, divide it by 10, and console log the value
// let num1 = 20/10
// console.log(num1)
// // *Functions*
// // Create a function that multiplys 3 numbers and alerts the product
// function mul(x,y,z){
//     return x*y*z
// }
// alert(mul(2,2,2))
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function week(){
//     let askuser = prompt("tell me which day is today?").tolow
//     if(askuser === "saturday" || "sunday"){
//         alert("weekend")
//     }
//     else if(askuser !== "saturday" || "sunday"){
//         alert("weekday")

//     }
// }
// week()
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function take(value){
    
    for(let i=1;i<=value;i+=3){
        console.log(i)

    }
}
take(30)