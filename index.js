//Variables initialization
let cards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let success = 0;
let tempo = false;
let timer = 40;
let initialTime = 30;
let regressionTime = null;

// Variables pointing html document

let showMovements = document.getElementById('movement');
let showSuccess = document.getElementById('success');
let showTime = document.getElementById('t-time');


//Ramdom numbers generation
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5})
console.log(numbers)

//Functions
function countTime(){
    regressionTime = setInterval(()=>{
        timer--;
        showTime.innerHTML = `Time: ${timer} seconds`;
        if(timer == 0){
            clearInterval(regressionTime);
            blockCards();
        }
    },1000);
}

function blockCards(){
    for(let i = 0; i <=15; i++){
        let cardsblocks = document.getElementById(i);
        cardsblocks.innerHTML = `<img src= "./Assets/${numbers[i]}.png" alt="">`;
        cardsblocks.disabled = true;
    }
}
//Main Function
function cardsClick(id) {

    if (tempo == false){
        countTime();
        tempo = true;
    }
    cards++;
    console.log(cards);

    if(cards == 1){
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = `<img src= "./Assets/${firstResult}.png" alt="">`;
     //Disable first button
        card1.disabled = true;
        } else if (cards == 2){
            card2 = document.getElementById(id);
            secondResult = numbers[id];
            card2.innerHTML = `<img src="./Assets/${secondResult}.png" alt="">`;
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
                if(success == 8){
                    clearInterval(regressionTime);
                    showSuccess.innerHTML = `Succeses : ${success} 🥳👌🙌`;
                    showTime.innerHTML = `Wonderfull 🎉🎊 you just delayed ${initialTime - timer} seconds`;
                    showMovements.innerHTML = `Movements : ${movements} ✌️😁`
                    setTimeout(()=>{
                        alert("Felicidades has ganado");
                    },3000);
                }
            }else{
                //show values and hide again
                setTimeout(()=>{
                    card1.innerHTML = ' ';
                    card2.innerHTML = ' ';
                    card1.disabled = false;
                    card2.disabled = false;
                    cards = 0;
                },1000);
            }
        }
   
}
