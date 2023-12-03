// Exemple :
import { ListeQuestions } from "./questions.js";

const sentence = document.querySelector(".sentence-to-write");
const PQuestion = document.querySelector("._Question");
const textareaToTest = document.querySelector(".textarea-to-test");
const Bravo = document.querySelector(".Bravo");
const NbrBonnesReponses = document.querySelector(".NbrBonnesReponses");
const timeDisplayed = document.querySelector(".time");
const scoreDisplayed = document.querySelector(".score");
let spansFromAPISentence;
let locked = false;
let listei = [];
let listeScore = [];

//Bravo.hidden = true;
textareaToTest.disabled = true;

function getRandom() {
  return Math.round(Math.random() * (ListeQuestions.length - 1));
}

function getNewQuestion() {
  try {
    console.log(listei);
    sentence.textContent = "";
    let i = getRandom();
    console.log(i);

    const nIncludesD = listei.includes(i);

    if (nIncludesD) {
      PQuestion.textContent = i;
      if (listei.length == ListeQuestions.length) {
        //FIN
        PQuestion.textContent =
          "Bravo vous avez terminé l'ensemble des questions.";
        textareaToTest.value = "";
        textareaToTest.disabled = true;
        locked = true;

        clearInterval(timerID);
        timeDisplayed.classList.remove("active");
        textareaToTest.classList.remove("active");
        //textareaToTest.textContent = "Bravo vous avez terminé l'ensemble des questions. Votre score est de :  " + score;
      } else {
        getNewQuestion();
      }
    } else {
      ListeQuestions[i].Réponse.split("").forEach((character) => {
        const spanCharacter = document.createElement("span");
        spanCharacter.textContent = character.toLowerCase();
        sentence.appendChild(spanCharacter);
      });
      spansFromAPISentence = sentence.querySelectorAll(
        ".sentence-to-write span"
      );
      PQuestion.textContent = ListeQuestions[i].Question;

      textareaToTest.value = "";
      locked = false;
      listei.push(i);

      //console.log(listei);
    }
  } catch (error) {
    console.error("Erreur dans getNewQuestion:", error);
    sentence.textContent = "Une erreur est survenue : " + error.message;
  }
}

getNewQuestion();

window.addEventListener("keydown", handleStart);

let time;
let score;
let timerID;

function handleStart(e) {
  if (!sentence.textContent)
    sentence.textContent = "Attendez l'arrivée de la phrase.";

  if (e.key === "Escape") {
    listei.splice(0, listei.length);
    textareaToTest.disabled = false;
    NbrBonnesReponses.textContent =
      "Le nombre de bonnes réponses est de : " +
      listei.length +
      "/" +
      ListeQuestions.length;
    if (timerID) {
      clearInterval(timerID);
      timerID = undefined;
    }

    time = 1000;
    score = 0;

    timeDisplayed.classList.add("active");
    textareaToTest.classList.add("active");

    timeDisplayed.textContent = `Temps : ${time}`;
    scoreDisplayed.textContent = `Score : ${score}`;
    textareaToTest.value = "";

    spansFromAPISentence.forEach((span) => (span.className = ""));

    textareaToTest.addEventListener("input", handleTyping);
    textareaToTest.focus();
  }
}

function handleTyping(e) {
  if (locked) return;

  if (!timerID) startTimer();

  const completedSentence = checkSpans();

  if (completedSentence) {
    locked = true;
    Bravo.textContent = "Bravo ! Continuez comme ça";
    //Bravo.hidden = false;
    //Bravo.setTimeout(Bravo.textContent = "", 5000);
    setTimeout(() => {
      Bravo.textContent = "";
    }, 2000);

    getNewQuestion();
    NbrBonnesReponses.textContent =
      "Le nombre de bonnes réponses est de : " +
      listei.length +
      "/" +
      ListeQuestions.length;

    score += spansFromAPISentence.length;
    scoreDisplayed.textContent = `Score : ${score}`;
  }
}

function startTimer() {
  time--;
  timeDisplayed.textContent = `Temps : ${time}`;

  timerID = setInterval(handleTime, 1000);
}

function handleTime() {
  time--;
  timeDisplayed.textContent = `Temps : ${time}`;

  if (time === 0) {
    clearInterval(timerID);

    timeDisplayed.classList.remove("active");
    textareaToTest.classList.remove("active");

    const spansFromAPISentence = sentence.querySelectorAll("span");
    spansFromAPISentence.forEach((span) =>
      span.classList.contains("correct") ? score++ : ""
    );

    scoreDisplayed.textContent = `Score : ${score}`;
    textareaToTest.removeEventListener("input", handleTyping);

    Array.prototype.max = function () {
      return Math.max.apply(null, this);
    };
    //Affichage du meilleur score:
    listeScore.push(score);
    let scoreMax = listeScore.max();
    console.log(scoreMax);
    document.querySelector(
      ".best-score"
    ).textContent = `Le meilleur score actuel est : ${scoreMax}`;
  }
}

function checkSpans() {
  const textareaCharactersArray = textareaToTest.value.split("");
  let completedSentence = true;
  let currentGoodLetters = 0;

  for (let i = 0; i < spansFromAPISentence.length; i++) {
    if (textareaCharactersArray[i] === undefined) {
      spansFromAPISentence[i].className = "";
      completedSentence = false;
    } else if (
      textareaCharactersArray[i] === spansFromAPISentence[i].textContent
    ) {
      spansFromAPISentence[i].classList.remove("wrong");
      spansFromAPISentence[i].classList.add("correct");
      currentGoodLetters++;
    } else {
      spansFromAPISentence[i].classList.add("wrong");
      spansFromAPISentence[i].classList.remove("correct");
      completedSentence = false;
    }
  }

  scoreDisplayed.textContent = `Score : ${score + currentGoodLetters}`;

  return completedSentence;
}

document.onkeydown = document.onkeyup = keydown;
const Pretorian = document.querySelector(".Pretorian");

function keydown(evt) {
  if (evt.ctrlKey && evt.shiftKey) {
    Pretorian.innerHTML = '<a href = "coucou" > π';
    Pretorian.style.textdecoration = "none";
    //alert("CTRL+ALT+F4");
  } else {
    Pretorian.textContent = "π";
  }
}
/*
document.onkeydown = keydown; 

function keydown (evt) { 

    if (!evt) evt = event; 

    if (evt.ctrlKey && evt.altKey && evt.keyCode === 115) {

        alert("CTRL+ALT+F4"); 

    } else if (evt.shiftKey && evt.keyCode === 9) { 

        alert("Shift+TAB");

    } 

}*/
