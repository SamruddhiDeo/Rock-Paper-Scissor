//Variable Declarations
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let computerBox = document.getElementById("computerBox")
let userBox = document.getElementById("userBox")
let mainComputerScore = document.getElementById("mainComputerScore")
let mainUserScore = document.getElementById("mainUserScore")
let playAgain = document.getElementById("playAgain")
let arr = ["img/rock.png", "img/paper.png", "img/scissor.png"]
let inputVal = document.querySelector('input');
let a
let compscore = 0
let userscore = 0

//Main logic starts here
addlisteners()
playAgain.addEventListener("click", reset)

//function to add listeners
function addlisteners() {
    rock.addEventListener("click", rockbtn)
    paper.addEventListener("click", paperbtn)
    scissor.addEventListener("click", scissorbtn)
}

//function to remove listeners
function removelisteners() {
    if (compscore == inputVal.value || userscore == inputVal.value || (compscore == inputVal.value && userscore == inputVal.value)) {
        rock.removeEventListener("click", rockbtn)
        paper.removeEventListener("click", paperbtn)
        scissor.removeEventListener("click", scissorbtn)
    }
}

function rockbtn() {
    a = Math.floor(Math.random() * 3);
    userBox.setAttribute("src", "img/rock.png")
    computerBox.setAttribute("src", arr[`${a}`])
    score()
}

function paperbtn() {
    a = Math.floor(Math.random() * 3);
    userBox.setAttribute("src", "img/paper.png")
    computerBox.setAttribute("src", arr[`${a}`])
    score()
}

function scissorbtn() {
    a = Math.floor(Math.random() * 3);
    userBox.setAttribute("src", "img/scissor.png")
    computerBox.setAttribute("src", arr[`${a}`])
    score()
}

function reset() {
    compscore = 0
    userscore = 0
    mainComputerScore.innerHTML = "Score : " + compscore
    mainUserScore.innerHTML = "Score : " + userscore
    userBox.removeAttribute("src");
    computerBox.removeAttribute("src");
    addlisteners()
}

function score() {
    comp = computerBox.getAttribute("src")
    user = userBox.getAttribute("src")
    if ((comp == "img/scissor.png" && user == "img/paper.png") || (comp == "img/paper.png" && user == "img/rock.png") || (comp == "img/rock.png" && user == "img/scissor.png")) {
        compscore++;
        mainComputerScore.innerHTML = "Score : " + compscore
    }
    else if ((user == "img/scissor.png" && comp == "img/paper.png") || (user == "img/paper.png" && comp == "img/rock.png") || (user == "img/rock.png" && comp == "img/scissor.png")) {
        userscore++;
        mainUserScore.innerHTML = "Score : " + userscore
    }       
        checkwin()
}

function checkwin() {
    if (compscore == inputVal.value) {
        alert("Computer Won");
        removelisteners()
    }
    else if (userscore == inputVal.value) {
        alert("You Won");
        removelisteners()
    }
    else if (compscore == inputVal.value && userscore == inputVal.value) {
        alert("It's a tie");
        removelisteners()
    }
}