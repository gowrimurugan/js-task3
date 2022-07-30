//let buttons = document.querySelectorAll(".btn");
//console.log(buttons);
//function cal(){
//   let pri = parseInt(this.parentNode.previousElementSibling.previousElementSibling.firstChild.value);
//console.log(pri);
//      let qlty = parseInt(this.parentNode.previousElementSibling.firstChild.value);
//      //console.log(qlty);
//      let amount = pri * qlty;
//      //console.log(amount);
//      this.parentNode.nextElementSibling.firstChild.innerText = amount;
//     // console.log("ok");
//s }
// function addEvent(button){
//     button.addEventListener("click" , cal);
// }
// buttons.forEach(addEvent);


let prices = document.querySelectorAll(".price");
let quantity = document.querySelectorAll(".qnty");
let buttons = document.querySelectorAll(".btn");
let amnt = document.querySelectorAll(".amt")
function cal() {
  let amt = prices[this.i].value * quantity[this.i].value;
  amnt[this.i].innerText = amt;
}
buttons.forEach((btn,index)=> {
  btn.addEventListener("click",cal);
  btn.i = index;
});

