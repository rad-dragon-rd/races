let car1 = document.querySelector(".car1")
let car2 = document.querySelector(".car2")
let score = 100
let bet = 10
let playerCar = 0
let start = false

document.querySelector(".black-btn").onclick = function(){
    if (start == false && bet > 0){
        playerCar = 2
        start = true
        Race()
    }

}
document.querySelector(".white-btn").onclick = function(){
    if (start == false && bet > 0){
        playerCar = 1
        start = true
        Race()
    }

}
document.querySelector(".button-minus").onclick = function(){
    if (start == false){
        bet -= 10
        document.querySelector(".bet").innerHTML = bet
        if (bet <= 0){
            document.querySelector(".bet").innerHTML = 0
            bet = 0
        }   
    }
}
document.querySelector(".button-plus").onclick = function(){
    if (start == false){
        if (bet < score){
            bet += 10
            document.querySelector(".bet").innerHTML = bet
        }
    }
    
}
function Race(){
    let left1 = 2
    let interval1 = setInterval(() => {
        car1.style.left = left1 + "%"
        let randomSpeed = Math.random() * Math.random() * 0.3
        left1 = left1 + randomSpeed
        if (left1 > 100){
            if (playerCar == 1){
                score = score + bet
            }
            else{
                score = score - bet
            }
            document.querySelector(".score").innerHTML = score
            clearInterval(interval1)
            clearInterval(interval2)
            start = false
            bet = 0
            document.querySelector(".bet").innerHTML = bet
        }
    }, 5);
    let left2 = 2
    let interval2 = setInterval(() => {
        car2.style.left = left2 + "%"
        let randomSpeed = Math.random() * Math.random() * 0.3
        left2 = left2 + randomSpeed
        if (left2 > 100){
            if (playerCar == 2){
                score = score + bet
            }
            else{
                score = score - bet
            }
            document.querySelector(".score").innerHTML = score
            clearInterval(interval1)
            clearInterval(interval2)
            start = false
            bet = 0
            document.querySelector(".bet").innerHTML = bet

        }
    }, 5);
}

// function Bet(){
//     let scorePlus =+ 10
//     let scoreminus =- 10


// }