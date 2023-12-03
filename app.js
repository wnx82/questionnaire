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

Question1 = {
  Question: "1.	Qu’est-ce que la programmation procédurale",
  Réponse:
    "La programmation procédurale contient simplement une série d'étapes à réaliser",
};
Question2 = {
  Question: "2.	Qu’est-ce que la programmation orientée objet",
  Réponse:
    "C'est un modèle de programmation informatique qui met en oeuvre une conception basée sur les objets",
};
Question3 = {
  Question: "3.	Qu’est-ce qu’un algorithme",
  Réponse:
    "Un algorithme, c'est réfléchir à la manière la plus simple d'exécuter des opérations pour arriver à un résultat donné",
};
Question4 = {
  Question:
    "4.	Quelle est la différence entre l’interpréteur et le compilateur.",
  Réponse:
    "L'interpréteur se charge de l'exécution du langage. Le compilateur, lui, va le traduire, soit en langage machine soit dans un autre langage interprété",
};
Question5 = {
  Question: "5.	Les 6 concepts de la POO.",
  Réponse: "Objet classe encapsulation abstraction héritage polymorphisme",
};
Question6 = {
  Question: "6.	Qu’est-ce qu’un objet",
  Réponse:
    "Un objet est une entité qui représente un élément du domaine étudié. Il possède des états (informations) et des actions (méthodes)",
};
Question7 = {
  Question: "7.	Qu’est-ce qu’une méthode",
  Réponse:
    "Une méthode est une fonction ou procédure liée à un objet qui est déclenchée à la réception d'un message particulier",
};
Question8 = {
  Question: "8.	Qu’est-ce qu’un attribut",
  Réponse:
    "Les attributs d'objets sont l'ensemble des informations se présentant sous forme de variables et permettant de représenter l'état de l'objet",
};
Question9 = {
  Question: "9.	Qu’est-ce qu’une classe",
  Réponse:
    "Une classe est un modèle d'objet, c'est un nouveau type créé par le programmateur et qui sert de modèle pour tous les objets de cette classe",
};
Question10 = {
  Question: "10.	Qu’est-ce qu’une classe abstraite",
  Réponse:
    "Une classe abstraite est une classe qui n'est pas instanciable, elle sert de modèle à d'autres classes dérivées / héritées",
};
Question11 = {
  Question: "11.	Qu’est-ce qu’une méthode abstraite",
  Réponse:
    "c'est une méthode qu'il faudra redéfinir dans une classe héritée. Une classe qui contient une méthode abstraite est elle meme abstraite",
};
Question12 = {
  Question: "12.	Qu’est-ce qu’une classe static",
  Réponse:
    "Une classe static ne peut pas être instanciée, ni héritée et ne peut pas contenir de constructeurs",
};
Question13 = {
  Question: "13.	Qu’est-ce qu’un attribut et méthode static",
  Réponse:
    "Une méthode static est une méthode qui n'agit pas sur des variables d'instances mais uniquement sur des variables de classe. Ces méthodes peuvent être utilisées sans instancier un objet de la classe",
};
Question14 = {
  Question: "14.	Qu’est-ce qu’une méthode virtuelle",
  Réponse:
    "Une méthode virtuelle dans une classe mère est une méthode qui peut être écrasée par override",
};
Question15 = {
  Question: "15.	Qu’est-ce que la déclaration ?",
  Réponse: "La déclaration permet de créer une nouvelle variable",
};
Question16 = {
  Question: "16.	Qu’est-ce que l’instanciation",
  Réponse:
    "L'instanciation est l'opération qui consiste à créer un nouvel objet à partir d'une classe, au moyen de l'opérateur new",
};

Question17 = {
  Question: "17.	Qu’est-ce qu’un constructeur",
  Réponse:
    "Un constructeur est une méthode spécifique dont le rôle est de construire l'objet, le plus souvent en utilisant des attributs",
};
Question18 = {
  Question: "18.	Qu’est-ce que l’encapsulation",
  Réponse:
    "L'encapsulation est un mécanisme consistant à rassembler les données et les méthodes au sein d'une structure en cachant l'implémentation de l'objet, càd empêcher l'accès aux données par un autre moyen que les services proposés",
};
Question19 = {
  Question: "19.	Qu’est-ce qu’un accesseur",
  Réponse:
    "Un accesseur est une méthode, souvent publique, qui permet d'accéder à un attribut privé. Un accesseur en lecture (getter) permet de lire la valeur d'un attribut",
};
Question20 = {
  Question: "20.	Qu’est-ce qu’un mutateur",
  Réponse:
    "Un mutateur est une méthode, souvent publique, qui permet d'accéder à un attribut privé. Un mutateur en écriture (setter), permet de modifier la valeur d'un attribut",
};

Question21 = {
  Question: "21.	Qu’est-ce que l’héritage",
  Réponse:
    "L'héritage permet de créer une classe à partir d'une autre, une classe dérivée est un type de la classe de base",
};

Question22 = {
  Question: "22.	Qu’est-ce que le polymorphisme ?",
  Réponse:
    "Le polymorphisme sert à proposer le même nom de méthode pour plusieurs types d'objets différents. virtual/override/new",
};
const ListeQuestions = [];
ListeQuestions.push(
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
  Question13,
  Question14,
  Question15,
  Question16,
  Question17,
  Question18,
  Question19,
  Question20,
  Question21,
  Question22
);
//Bravo.hidden = true;
textareaToTest.disabled = true;

function getRandom() {
  return Math.round(Math.random() * (ListeQuestions.length - 1));
}

function getNewQuestion() {
  try {
    console.log(listei);
    sentence.textContent = "";
    i = getRandom();
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
    sentence.textContent = error;
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
