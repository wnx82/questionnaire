// questions.js
// ...vos questions...

const Question1 = {
  Question: "1.	Qu’est-ce que la programmation procédurale",
  Réponse:
    "La programmation procédurale contient simplement une série d'étapes à réaliser",
};
const Question2 = {
  Question: "2.	Qu’est-ce que la programmation orientée objet",
  Réponse:
    "C'est un modèle de programmation informatique qui met en oeuvre une conception basée sur les objets",
};
const Question3 = {
  Question: "3.	Qu’est-ce qu’un algorithme",
  Réponse:
    "Un algorithme, c'est réfléchir à la manière la plus simple d'exécuter des opérations pour arriver à un résultat donné",
};
const Question4 = {
  Question:
    "4.	Quelle est la différence entre l’interpréteur et le compilateur.",
  Réponse:
    "L'interpréteur se charge de l'exécution du langage. Le compilateur, lui, va le traduire, soit en langage machine soit dans un autre langage interprété",
};
const Question5 = {
  Question: "5.	Les 6 concepts de la POO.",
  Réponse: "Objet classe encapsulation abstraction héritage polymorphisme",
};
const Question6 = {
  Question: "6.	Qu’est-ce qu’un objet",
  Réponse:
    "Un objet est une entité qui représente un élément du domaine étudié. Il possède des états (informations) et des actions (méthodes)",
};
const Question7 = {
  Question: "7.	Qu’est-ce qu’une méthode",
  Réponse:
    "Une méthode est une fonction ou procédure liée à un objet qui est déclenchée à la réception d'un message particulier",
};
const Question8 = {
  Question: "8.	Qu’est-ce qu’un attribut",
  Réponse:
    "Les attributs d'objets sont l'ensemble des informations se présentant sous forme de variables et permettant de représenter l'état de l'objet",
};
const Question9 = {
  Question: "9.	Qu’est-ce qu’une classe",
  Réponse:
    "Une classe est un modèle d'objet, c'est un nouveau type créé par le programmateur et qui sert de modèle pour tous les objets de cette classe",
};
const Question10 = {
  Question: "10.	Qu’est-ce qu’une classe abstraite",
  Réponse:
    "Une classe abstraite est une classe qui n'est pas instanciable, elle sert de modèle à d'autres classes dérivées / héritées",
};
const Question11 = {
  Question: "11.	Qu’est-ce qu’une méthode abstraite",
  Réponse:
    "c'est une méthode qu'il faudra redéfinir dans une classe héritée. Une classe qui contient une méthode abstraite est elle meme abstraite",
};
const Question12 = {
  Question: "12.	Qu’est-ce qu’une classe static",
  Réponse:
    "Une classe static ne peut pas être instanciée, ni héritée et ne peut pas contenir de constructeurs",
};
const Question13 = {
  Question: "13.	Qu’est-ce qu’un attribut et méthode static",
  Réponse:
    "Une méthode static est une méthode qui n'agit pas sur des variables d'instances mais uniquement sur des variables de classe. Ces méthodes peuvent être utilisées sans instancier un objet de la classe",
};
const Question14 = {
  Question: "14.	Qu’est-ce qu’une méthode virtuelle",
  Réponse:
    "Une méthode virtuelle dans une classe mère est une méthode qui peut être écrasée par override",
};
const Question15 = {
  Question: "15.	Qu’est-ce que la déclaration ?",
  Réponse: "La déclaration permet de créer une nouvelle variable",
};
const Question16 = {
  Question: "16.	Qu’est-ce que l’instanciation",
  Réponse:
    "L'instanciation est l'opération qui consiste à créer un nouvel objet à partir d'une classe, au moyen de l'opérateur new",
};

const Question17 = {
  Question: "17.	Qu’est-ce qu’un constructeur",
  Réponse:
    "Un constructeur est une méthode spécifique dont le rôle est de construire l'objet, le plus souvent en utilisant des attributs",
};
const Question18 = {
  Question: "18.	Qu’est-ce que l’encapsulation",
  Réponse:
    "L'encapsulation est un mécanisme consistant à rassembler les données et les méthodes au sein d'une structure en cachant l'implémentation de l'objet, càd empêcher l'accès aux données par un autre moyen que les services proposés",
};
const Question19 = {
  Question: "19.	Qu’est-ce qu’un accesseur",
  Réponse:
    "Un accesseur est une méthode, souvent publique, qui permet d'accéder à un attribut privé. Un accesseur en lecture (getter) permet de lire la valeur d'un attribut",
};
const Question20 = {
  Question: "20.	Qu’est-ce qu’un mutateur",
  Réponse:
    "Un mutateur est une méthode, souvent publique, qui permet d'accéder à un attribut privé. Un mutateur en écriture (setter), permet de modifier la valeur d'un attribut",
};

const Question21 = {
  Question: "21.	Qu’est-ce que l’héritage",
  Réponse:
    "L'héritage permet de créer une classe à partir d'une autre, une classe dérivée est un type de la classe de base",
};

const Question22 = {
  Question: "22.	Qu’est-ce que le polymorphisme ?",
  Réponse:
    "Le polymorphisme sert à proposer le même nom de méthode pour plusieurs types d'objets différents. virtual/override/new",
};
export const ListeQuestions = [];
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
