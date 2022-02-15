let number = document.getElementById("number");
let btn = document.getElementById("btn")
let main = document.getElementsByClassName("main")
let cont = document.querySelectorAll("p")



function lucky (){
    let a = Math.floor(Math.random()*90)+1
    return a
}

let luckyNumbers = []

btn.addEventListener("click",() =>{
    let v = number.value
    let z = 0
    while(z<=v-1){
    for (i=0;luckyNumbers.length<6;i++){
        let control = lucky()
        if (luckyNumbers.includes(control)){continue}
        else {luckyNumbers.push(control)}
    }
    luckyNumbers.sort((a,b)=>a-b);
    

    while(luckyNumbers.length<7){
        let control = lucky()
        if (luckyNumbers.includes(control)){continue}
        else {luckyNumbers.push(control)}
    }
    luckyNumbers.push(lucky())
    let h = luckyNumbers.join("-")
    let c =`${luckyNumbers[0]}-${luckyNumbers[1]}-${luckyNumbers[2]}-${luckyNumbers[3]}-${luckyNumbers[4]}-${luckyNumbers[5]} | ${luckyNumbers[6]} | ${luckyNumbers[7]}`
    
    console.log(c);
    cont[z].innerHTML=c
    luckyNumbers=[]
     
    
    z++
    }
    if (v-1<7){
        d = v
        for (d;d<8;d++)
        cont[d].innerHTML=""
       
        
    }
})


console.log(luckyNumbers);