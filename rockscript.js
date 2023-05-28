//Variable Declarations
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let computerBox = document.getElementById("computerBox")
let userBox = document.getElementById("userBox")
let mainComputerScore = document.getElementById("mainComputerScore")
let mainUserScore = document.getElementById("mainUserScore")
let playAgain = document.getElementById("playAgain")
let arr = ["rockimg/rock.png", "rockimg/paper.png", "rockimg/scissor.png"]
let inputVal = document.querySelector('input');
let alternateCompBox = document.querySelector('.alternateCompBox');
let alternateUserBox = document.querySelector('.alternateUserBox');
let a
let compscore = 0
let userscore = 0
let iv

//Main logic starts here
addlisteners()
playAgain.addEventListener("click",reset)

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
    alternateCompBox.style.display = "none"
alternateUserBox.style.display = "none"
computerBox.style.display = "block"
userBox.style.display = "block"
    a = Math.floor(Math.random() * 3);
    userBox.setAttribute("src", "rockimg/rock.png")
    userBox.style.backgroundImage = 'none';
    computerBox.setAttribute("src", arr[`${a}`])
    computerBox.style.backgroundImage = 'none';
    score()
}

function paperbtn() {
    alternateCompBox.style.display = "none"
alternateUserBox.style.display = "none"
computerBox.style.display = "block"
userBox.style.display = "block"
    a = Math.floor(Math.random() * 3);
    userBox.setAttribute("src", "rockimg/paper.png")
    userBox.style.backgroundImage = 'none';
    computerBox.setAttribute("src", arr[`${a}`])
    computerBox.style.backgroundImage = 'none';
    score()
}

function scissorbtn() {
    alternateCompBox.style.display = "none"
alternateUserBox.style.display = "none"
computerBox.style.display = "block"
userBox.style.display = "block"
    a = Math.floor(Math.random() * 3);
    userBox.setAttribute("src", "rockimg/scissor.png")
    userBox.style.backgroundImage = 'none';
    computerBox.setAttribute("src", arr[`${a}`])
    computerBox.style.backgroundImage = 'none';
    score()
}

function reset() {
    compscore = 0
    userscore = 0
    mainComputerScore.innerHTML = "Score : " + compscore
    mainUserScore.innerHTML = "Score : " + userscore
alternateCompBox.style.display = "block"
alternateUserBox.style.display = "block"
computerBox.style.display = "none"
userBox.style.display = "none"
    // userBox.style.backgroundImage = `linear-gradient(rgb(232, 115, 115), rgb(241, 232, 226))`;
    // computerBox.style.backgroundImage = 'linear-gradient(rgb(232, 115, 115), rgb(241, 232, 226))';
    userBox.removeAttribute("src")
    computerBox.removeAttribute("src")
    // console.log(iv)
    // location.reload();
    // inputVal.value = iv
    // console.log(iv)
    addlisteners()
}

function score() {
    comp = computerBox.getAttribute("src")
    user = userBox.getAttribute("src")
    if ((comp == "rockimg/scissor.png" && user == "rockimg/paper.png") || (comp == "rockimg/paper.png" && user == "rockimg/rock.png") || (comp == "rockimg/rock.png" && user == "rockimg/scissor.png")) {
        compscore++;
        mainComputerScore.innerHTML = "Score : " + compscore
    }
    else if ((user == "rockimg/scissor.png" && comp == "rockimg/paper.png") || (user == "rockimg/paper.png" && comp == "rockimg/rock.png") || (user == "rockimg/rock.png" && comp == "rockimg/scissor.png")) {
        userscore++;
        mainUserScore.innerHTML = "Score : " + userscore
    }       
    checkwin()
}

function checkwin() {
    if (compscore == inputVal.value){
        document.getElementsByClassName("modal-content")[0].lastElementChild.innerText = "Computer Won"
        modal.style.display = "block";
        removelisteners()
    }
    else if (userscore == inputVal.value){
        document.getElementsByClassName("modal-content")[0].lastElementChild.innerText = "You Won"
        modal.style.display = "block";
        removelisteners()
    }
    else if ((compscore == 0) && (userscore == 0)){
        document.getElementsByClassName("modal-content")[0].lastElementChild.innerText = "It's a Tie"
        modal.style.display = "block";
        removelisteners()
    }
}

//For Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}