//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function throwing(){
    let zebra = document.querySelector("h2")
    let boby = document.getElementById("bob").value
    zebra.innerText = `you need to stop taking snacks ${boby} times`
}

let button = document.querySelector("#help").addEventListener("click",throwing)



function show(){
    for(let i=1;i<=value;i++){
        console.log("you need to stop")
    }
}