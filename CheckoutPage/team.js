let buttonMin1 = document.querySelectorAll(".button-minus");
let buttonPlus1 = document.querySelectorAll(".button-plus");
let counterBag = document.querySelectorAll("#product-quantity");
let deleted = document.querySelectorAll(".remove-product");






buttonMin1.forEach((minus) => {
    minus.addEventListener("click", (e)=>{
        let num = + e.target.parentElement.childNodes[3].innerText
        // if(counterBag.innerHTML > 0){
        console.log(typeof num); 
        //     counterBag.innerHTML -= 1     
        // };
    });
});

// buttonMin1.addEventListener("click", ()=>{
    
//     if(counterBag.innerHTML > 0){
//         counterBag.innerHTML -= 1
//     };
// });
// let counterBagNum = Number(counterBag.innerHTML)

// buttonPlus1.addEventListener("click", ()=>{
    
//     counterBagNum += 1;
//     counterBag.innerHTML = counterBagNum

// });
deleted.forEach((remove) => {
    remove.addEventListener("click", (e)=>{
        e.target.parentElement.parentElement.parentElement.remove()
    });
});
