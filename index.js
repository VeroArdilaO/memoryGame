//Variables initialization
let cards = 0;
let card1 = null;

//Ramdom numbers generation
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5})
console.log(numbers)
//Main Function
function cardsClick(id) {
    cards++;
    console.log(cards);

    if(cards == 1){
        card1 = document.getElementById(id);
        card1.innerHTML = numbers[id];
    }
}
