var dropDown = document.getElementById("drop");
dropDown.addEventListener("click", addWidth);
var x = document.getElementsByClassName("navBarSide");
    var navbarSide = x[0];
function addWidth(){
    navbarSide.classList.add("increaseWidth");
}
var closeSideNav = document.getElementById("closeNavbarSide");
closeSideNav.addEventListener("click", close)
function close(){
    navbarSide.classList.remove("increaseWidth");
}
const phrases = ["Kyle.Hannemann","A.Husband", "A.Father", "A.Student", "An.Athlete", "A.Person"];
let phrasesElements = [];
for (var i = 0; i < phrases.length; i++){
    let phrase = [];
    for (var j = 0; j < phrases[i].length; j++){
        if (phrases[i][j] == "."){
            let x = document.createElement("div")
            x.classList.add("letterSpace");
            x.dataset.status = "on";
            x.innerHTML = phrases[i][j];
            x.style.display = "none";
            phrase.push(x)
            
        }
        else {
            let x = document.createElement("div");
            x.classList.add("letter");
            x.dataset.status = "on";
            x.innerHTML = phrases[i][j];
            x.style.display = "none";
            phrase.push(x)

        }
    }
    phrasesElements.push(phrase);
}
let movingLetters; 
console.log(phrasesElements);
let rotatingWords = document.getElementById("rotatingWords");
let letterRemoval;
let wordRemoval;
let phraseIndex = 0;
window.addEventListener('load', startWordRemoval);
function startWordRemoval(){
    for (var i = 0; i < phrasesElements[phraseIndex].length; i++){
        
        phrasesElements[phraseIndex][i].style.display = "block";

        rotatingWords.appendChild(phrasesElements[phraseIndex][i]);
    }
    movingLetters = document.getElementsByClassName("letter");
    spaces = document.getElementsByClassName("letterSpace");

    setTimeout(startLetterRemoval, 2000);
}
function startLetterRemoval(){
    letterRemoval = setInterval(removeLetter, 300);
}
function removeLetter(){
    for (var i = 0; i < movingLetters.length; i++){
        if (movingLetters[i].dataset.status === "on"){
            movingLetters[i].dataset.status = "off";
            movingLetters[i].classList.add("offScreen");
            if (i == movingLetters.length - 1){
               setTimeout(nextPhrase, 1500);
            }
            return ;
        }
    }
}
function nextPhrase(){
    for (var j = 0; j < movingLetters.length; j++){
        movingLetters[j].style.display = "none";
        
    }
    for (var z = 0; z < spaces.length; z++){
        spaces[z].style.display = "none";
    }
    clearInterval(letterRemoval);
    phraseIndex += 1;
    if (phraseIndex > phrasesElements.length - 1){
        for (var j = 0; j < phrasesElements[0].length; j++){
            phrasesElements[0][j].style.display = "block";
            phrasesElements[0][j].classList.remove("offScreen")
            rotatingWords.appendChild(phrasesElements[0][j]);
            
        }

        return;
    }
    startWordRemoval();

}
let panels = document.getElementsByClassName("panel");
let backButton = document.getElementById("back").addEventListener("click", panelBack);
let forwardButton = document.getElementById("forward")
forwardButton.addEventListener("click", panelForward);

function panelForward(){
    for (var i = 0; i < panels.length; i++){
       if ((panels[i].classList.contains("hidePanel") == false) && (i < panels.length - 1)){
          panels[i].classList.add("hidePanel"); 
          panels[i += 1].classList.remove("hidePanel");
       }
        }
    }
function panelBack(){
        for (var i = 0; i < panels.length; i++){
           if ((panels[i].classList.contains("hidePanel") == false) && (i > 0)){
              panels[i].classList.add("hidePanel"); 
              panels[i -= 1].classList.remove("hidePanel");
           }
            }
        }
    

