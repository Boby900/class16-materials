//--- Easy
//create a variable and assign it a number
let num = 2
//minus 10 from that number
num -=10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let place = document.getElementById("danceDanceRevolution").value
place += 25
//add 25 to that number
alert(place)
//alert that number

//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener("click", function con(){
    console.log(place+num)
})