const gameArea =
document.getElementById("game-area");

const scoreElement =
document.getElementById("score");

const goalElement =
document.getElementById("goal");

const levelTitle =
document.getElementById("level-title");

const levels = [

    {
        goal:10,
        speed:5000,
        title:"Nivel 1 - Karina ❤️",
        image:"img/karina.png"
    },

    {
        goal:15,
        speed:4200,
        title:"Nivel 2 - Paola 💕",
        image:"img/paola.png"
    },

    {
        goal:20,
        speed:3400,
        title:"Nivel 3 - Ariana ✨",
        image:"img/ariana.png"
    },

    {
        goal:25,
        speed:2500,
        title:"Nivel 4 - Yoongi 🔥",
        image:"img/yoongi.png"
    },

    {
        goal:30,
        speed:1800,
        title:"Nivel 5 - Pirata 👑",
        image:"img/pirata.png"
    }

];

const finalImages = [
    "img/karina.png",
    "img/paola.png",
    "img/ariana.png",
    "img/yoongi.png",
    "img/pirata.png"
];

let currentLevel = 0;
let score = 0;
let gameInterval;

startLevel();

function startLevel(){

    score = 0;

    const level =
    levels[currentLevel];

    scoreElement.innerHTML =
    "0 / " + level.goal;

    goalElement.innerHTML =
    "Atrapa " + level.goal + " caras";

    levelTitle.innerHTML =
    level.title;

    clearInterval(gameInterval);

    gameInterval =
    setInterval(createFace,700);
}

function createFace(){

    const level =
    levels[currentLevel];

    const face =
    document.createElement("img");

    face.src = level.image;

    face.classList.add("face");

    face.style.left =
    Math.random()*90 + "%";

    face.style.animationDuration =
    level.speed + "ms";

    gameArea.appendChild(face);

    face.onclick = function(){

        face.remove();

        score++;

        scoreElement.innerHTML =
        score + " / " + level.goal;

        if(score >= level.goal){

            nextLevel();
        }
    };

    setTimeout(()=>{

        face.remove();

    }, level.speed);

}

function nextLevel(){

    currentLevel++;

    if(currentLevel >= levels.length){

        clearInterval(gameInterval);

        alert(
            "❤️ Has completado el reto ❤️"
        );

        window.location.href =
        "index.html";

        return;
    }

    startLevel();
}