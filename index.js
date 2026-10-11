
let homeScore = 0
let guestScore = 0

let totalHomeScore = document.getElementById("home_score")
let totalGuestScore = document.getElementById("guest_score")


totalHomeScore.textContent = homeScore
totalGuestScore.textContent = guestScore


function homeAdd1() {
    homeScore += 1
    totalHomeScore.textContent = homeScore
}

function homeAdd3() {
    homeScore += 3
    totalHomeScore.textContent = homeScore
}

function homeAdd5() {
    homeScore += 5
    totalHomeScore.textContent = homeScore
}


function guestAdd1() {
    guestScore += 1
    totalGuestScore.textContent = guestScore
}

function guestAdd3() {
    guestScore += 3
    totalGuestScore.textContent = guestScore
}

function guestAdd5() {
    guestScore += 5
    totalGuestScore.textContent = guestScore
}


function newGame() {
    homeScore = 0
    guestScore = 0
    totalHomeScore.textContent = homeScore
    totalGuestScore.textContent = guestScore
}


