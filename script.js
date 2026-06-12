let videosData = [];
let currentIndex = 0;

fetch("videos.json")
.then(response => response.json())
.then(videos => {

videosData = videos;

showVideo(0);

document
.getElementById("prevBtn")
.addEventListener("click",()=>{

currentIndex--;

if(currentIndex < 0){
currentIndex = videosData.length - 1;
}

showVideo(currentIndex);

});

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

currentIndex++;

if(currentIndex >= videosData.length){
currentIndex = 0;
}

showVideo(currentIndex);

});

});

function showVideo(index){

const video = videosData[index];

document
.getElementById("videos-container")
.innerHTML = `
<div class="video-card">

<h3>${video.nombre}</h3>

<video controls>
<source src="${video.video}" type="video/mp4">
</video>

</div>
`;

document
.getElementById("counter")
.innerHTML =
`${index+1} / ${videosData.length}`;

}

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