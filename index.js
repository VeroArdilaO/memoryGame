//Variables initialization
let cards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let success = 0;

// Variables pointing html document

let showMovements = document.getElementById('movement');
let showSuccess = document.getElementById('success');


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
        firstResult = numbers[id];
        card1.innerHTML = firstResult;
     //Disable first button
        card1.disabled = true;
        }else if (cards == 2){
            card2 = document.getElementById(id);
            secondResult = numbers[id];
            card2.innerHTML = secondResult;
            //disabled second button
            card2.disabled = true;
            //increase movements
            movements++;
            showMovements.innerHTML = `Movements : ${movements}`;

            if(firstResult == secondResult){
                //block counter
                cards = 0;
                //increase success
                success++;
                showSuccess.innerHTML = `Succeses : ${success}`;
            }else{
                //show values and hide again
                setTimeout(()=>{
                    card1.innerHTML = ' ';
                    card2.innerHTML = ' ';
                    card1.disabled = false;
                    card2.disabled = false;
                    cards = 0;
                },3000);
            }
        }
   
}
