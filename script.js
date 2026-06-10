fetch("videos.json")
.then(response => response.json())
.then(videos => {

const container =
document.getElementById("videos-container");

videos.forEach(video => {

const card =
document.createElement("div");

card.className = "video-card";

card.innerHTML = `
<h3>${video.nombre}</h3>

<video controls>
<source src="${video.video}" type="video/mp4">
</video>
`;

container.appendChild(card);

});

});

function createPetal(){

const petal =
document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=
Math.random()*100+"vw";

petal.style.animationDuration=
(5+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

}

setInterval(createPetal,400);