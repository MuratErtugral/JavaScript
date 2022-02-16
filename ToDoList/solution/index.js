let happy = document.getElementById("happy");
let day = document.getElementById("day")



let a = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
day.innerText =days[a.getDay()]