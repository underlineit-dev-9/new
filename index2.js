/*let errorEl=document.getElementById("error")

function purchase(){
    errorEl.textContent=" Something went wrong Pls try again "
}


let num1El=document.getElementById("num1-el").innerText=8
let num2El=document.getElementById("num2-el").innerText=2
let sumEl=document.getElementById("sum-el")
function add(){
    sumEl.textContent=num1El+num2El
}
function sub(){
    sumEl.textContent=num1El-num2El
}
function mul(){
    sumEl.textContent=num1El*num2El
}
function divide(){
    sumEl.textContent=num1El/num2El
}*/
/*
// ARRAYS
 
let arrays=["sai",22,true,33,55,55,2]



console.log(arrays)

console.log(arrays.splice(0,1))
console.log(arrays)
*/
/*
//For loops
for (let count=10;count<101;count+=10){
    console.log(count )

}

*/

// Returning a value 
/*let player1Time=102
let player2Time=107

function getFastestRaceTime(){
    if (player1Time>player2Time){
        return player2Time
    }else if(player1Time<player2Time){
        return player1Time
    }else{
        return player1Time
    }

}
let fastest=getFastestRaceTime()
console.log(fastest)
function total(){
    return(player1Time+player2Time)
}
let varable=total()
console.log(varable)
*/
//RANDOM PICKING
/*
let cardsData=[1,2,3,4,5,6,7,8,9,10,11]

let rand=Math.random()

let Cardslength=cardsData.length

let randIndex=Math.floor(rand*Cardslength)

console.log(cardsData[randIndex])    



*/

// OBJECTS
/*
let course={
    title:"Learn CSS Grid for free",
    lessons:true,
    creator:"sidhu",
    length:63,
    level:[1,3,4,5,6,7],
    tags:["html","css"]

}
console.log("hihi")
console.log(course.level)
console.log(course.lessons)
console.log(course.title)

*/
//done by sidhu

function getRandomCard(){
    let cardsData=[2,3,4,5,6,7,8,9,10,10,10,10,11]
    
    let randIndex=Math.floor(Math.random()*cardsData.length)

    return(cardsData[randIndex])    
}


 
let cards=[]//array - ordered list of items

let sum=0
let hasBlackJack=false
let isalive=false
let message=""

let cardEl=document.getElementById("card-el")

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let player={
    name :"It's_Me_Sai"
    ,chips:946}

let playerEl=document.getElementById("player-el").textContent=player.name+" : $"+player.chips


function startGame(){
    cardEl.innerText=""
    isalive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards.push(firstCard,secondCard)
    sum=firstCard+secondCard
    hasBlackJack=false
    isalive=true
    renderGame()
}
function renderGame(){
    
    cardEl.textContent="Cards : "
   // cardEl.textContent=cardEl.textContent+"hi"
    //let a=""
    for (let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
      
      
        //a=a+"+"+cards[i]

    }

    //a=a.replace("+","")
    //cardEl.textContent=a
    sumEl.textContent=" Sum :"+sum
    if (sum<=20){
        message="Do you want to draw a new card😊 "
    }else if (sum===21){
        message="WoHoo you've got the BLACKHJACK 🥳"
        hasBlackJack=true
    
    }else {
        message="You're out of the game !😭"
        isalive=false
    }
    messageEl.textContent=message
}
function newCard(){

    if (isalive===true && hasBlackJack===false){
        let newwcard=getRandomCard()
        //  let text=newccard+"+"+1
        cards.push(newwcard)
        sum=sum+newwcard
        renderGame()
    }
    

    //messageEl.textContent="Drawing a new card for u"
  
    //cardEl.textContent="Cardss :"+a//"Cards :  " + firstCard + "+"+secondCard+"+"+newwcard
}
console.log(hasBlackJack,isalive)

