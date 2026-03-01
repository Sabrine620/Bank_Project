"use strict"

let userInput = document.querySelector(".user-input");
let pinInput = document.querySelector(".pin-input");
let logIn = document.querySelector(".logIn")
let btn = document.querySelector(".btn")
let balanceValue = document.querySelector(".balance-value")
let inContent = document.querySelector(".in-content")
let outContent = document.querySelector(".out-content")
let inetrestContent = document.querySelector(".inetrest-content")
let deposit =document.querySelector(".deposit")
let withdrawal =document.querySelector(".withdrawal")
let priceWithdrawal = document.querySelector(".price-withdrawal")
let price = document.querySelector(".price")
let leftSide = document.querySelector(".left-side")
let btnClose =document.querySelector(".btnClose")




//////data:::
const account1 ={
    owner :"sabrine salah",
    mouvements :[4000,-550,1000,-200,350],
    interestrate : 1.2 ,
    pin : 1111 ,

}
const account2 ={
    owner :"amal salah",
    mouvements : [200,-150,1000,-300,100],
    interestrate : 1,
    pin : 2222,

}
const accounts=[account1, account2]
const balance=[]

//////functions::

/////function to calculate balance
const CalBalance= function(acc){
    const newaccount=acc.mouvements.reduce((acc,ele)=>acc+ele, 0)
    console.log(newaccount)
    balanceValue.textContent= `${newaccount}€`;
}
// console.log(CalBalance(account1))

///function display summary
const displaySummary =function(acc){
    const numDeposits = acc.mouvements.filter(ele =>ele > 0).reduce((acc, ele)=> acc+ele,0);
    const numWithdrawal = acc.mouvements.filter(ele => ele < 0).reduce((acc, ele)=> acc+ele,0);
     const interest = acc.mouvements.filter (ele=> ele>0).map(ele=> (ele*1.5)/100).reduce((acc,ele)=> acc+ele,0)
    inContent.textContent=(`${numDeposits }€`);
    outContent.textContent =`${Math.abs (numWithdrawal)}€`
    inetrestContent.textContent =`${interest}€`
}
// const summary = displaySummary(account1);

/////////function userName

const userName =function(acc){
    const newuserName =acc.owner.toLowerCase().split(" ").map((ele)=>ele[0]).join("")
    console.log(newuserName)
    acc.username = newuserName

}
userName(account1)
console.log(account1.username);
console.log(account1)


/////////function display mouvements

btn.addEventListener('click', function() {

      const activeAccount = accounts.find(acc => acc.username === userInput.value);
      if(activeAccount &&  activeAccount.pin === Number(pinInput.value)){
        console.log(`Welcome ${activeAccount.owner} !`);
        logIn.textContent = (`Welcome ${activeAccount.owner} !`);
        CalBalance(activeAccount);
        displaySummary(activeAccount);
        
    }else if (!activeAccount) {
        logIn.textContent = "Utilisateur inconnu";
    } else {
        logIn.textContent = "PIN incorrect";
    }


});




//////close account
btnClose.addEventListener('click', function(){
      const activeAccount = accounts.find(acc => acc.username === userInput.value);
      if(activeAccount &&  activeAccount.pin === Number(pinInput.value)){
                logIn.textContent = (`Log in to get started`);
                balanceValue.textContent = (`0000€`);
                inContent.textContent = (`0000€`);
                outContent.textContent = (`0000€`);
                inetrestContent.textContent =(`0000€`);
                price.textContent = (`0000€`);
                priceWithdrawal.textContent =(`0000€`);
                deposit.textContent = (` 0 DEPOSIT` );
                withdrawal.textContent = (` 0 WITHDRAWAL` );

            }
            else if (!activeAccount) {
        logIn.textContent = "Utilisateur inconnu";
    } else {
        logIn.textContent = "PIN incorrect";
    }
})











