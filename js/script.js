/*====================================================
    PROJECT MARION ❤️
    script.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");
const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");

const openingMusic = document.getElementById("openingMusic");

const countdown = document.getElementById("countdownSection");
const countNumber = document.getElementById("countNumber");

const heartbeat = document.getElementById("heartbeatScene");

const proposal = document.getElementById("proposalSection");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const yesSection = document.getElementById("yesSection");

const continueBtn = document.getElementById("continueBtn");

const transition = document.getElementById("transitionSection");

const fade = document.getElementById("screenFade");

/*==================================
LOADER
==================================*/

window.addEventListener("load", () => {

setTimeout(() => {

loader.classList.add("loaderHide");

},2500);

});

/*==================================
START EXPERIENCE
==================================*/

startButton.addEventListener("click", async () => {

try{

openingMusic.volume = 0.45;

await openingMusic.play();

}catch(e){

console.log(e);

}

intro.classList.add("hide");

countdown.classList.remove("hidden");
countdown.classList.add("show");

startCountdown();

});

/*==================================
COUNTDOWN
==================================*/

function startCountdown(){

let count = 3;

countNumber.textContent = count;

const timer = setInterval(()=>{

count--;

if(count > 0){

countNumber.textContent = count;

}

else if(count === 0){

countNumber.textContent = "💕";

}

else{

clearInterval(timer);

countdown.classList.remove("show");
countdown.classList.add("hide");

showHeartbeat();

}

},1200);

}

/*==================================
HEARTBEAT
==================================*/

function showHeartbeat(){

heartbeat.classList.remove("hidden");
heartbeat.classList.add("show");

setTimeout(()=>{

heartbeat.classList.remove("show");
heartbeat.classList.add("hide");

showProposal();

},4200);

}

/*==================================
PROPOSAL
==================================*/

function showProposal(){

proposal.classList.remove("hidden");
proposal.classList.add("show");

}
/*==================================
ESCAPING NO BUTTON
==================================*/

const funnyMessages = [

"😂 Nice try!",

"🥺 Don't break my heart.",

"💕 I know you want YES.",

"😝 You almost got me!",

"❤️ That button is shy."

];

let noAttempts = 0;

function moveNoButton(){

const area = document.querySelector(".buttonArea");

if(!area) return;

const maxX = area.clientWidth - noBtn.offsetWidth;

const maxY = area.clientHeight - noBtn.offsetHeight;

const randomX = Math.max(0,Math.random()*maxX);

const randomY = Math.max(0,Math.random()*maxY);

noBtn.style.position="absolute";

noBtn.style.left=randomX+"px";

noBtn.style.top=randomY+"px";

if(noAttempts<funnyMessages.length){

noBtn.textContent=funnyMessages[noAttempts];

noAttempts++;

}

}

noBtn.addEventListener("mouseenter",moveNoButton);

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveNoButton();

});

/*==================================
YES BUTTON
==================================*/

let hasAnswered = false;

yesBtn.addEventListener("click",()=>{

    if(hasAnswered) return;

    hasAnswered = true;

    launchFireworks();

    proposal.classList.remove("show");
    proposal.classList.add("hide");

    yesSection.classList.remove("hidden");
    yesSection.classList.add("show");

});
/*==================================
FIREWORKS
==================================*/

function launchFireworks(){

const duration=5000;

const end=Date.now()+duration;

(function frame(){

confetti({

particleCount:5,

spread:70,

origin:{x:0},

angle:60

});

confetti({

particleCount:5,

spread:70,

origin:{x:1},

angle:120

});

confetti({

particleCount:8,

spread:100,

origin:{

x:Math.random(),

y:Math.random()*0.6

}

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

}
/*==================================
SMOOTH MUSIC FADE
==================================*/

function fadeOutMusic(audio, duration = 2000){

if(!audio) return;

const step = audio.volume / (duration / 50);

const fade = setInterval(()=>{

if(audio.volume > step){

audio.volume -= step;

}else{

audio.volume = 0;

audio.pause();

clearInterval(fade);

}

},50);

}

function fadeInMusic(audio,targetVolume=0.45,duration=2000){

if(!audio) return;

audio.volume = 0;

audio.play().catch(()=>{});

const step = targetVolume/(duration/50);

const fade = setInterval(()=>{

if(audio.volume < targetVolume-step){

audio.volume += step;

}else{

audio.volume = targetVolume;

clearInterval(fade);

}

},50);

}

/*==================================
FADE TO NEXT PAGE
==================================*/

continueBtn.addEventListener("click",()=>{

fadeOutMusic(openingMusic,1800);

transition.classList.remove("hidden");

transition.classList.add("show");

fade.classList.add("active");

setTimeout(()=>{

window.location.href="proposal.html";

},3000);

});
/*==================================
KEYBOARD SHORTCUTS
(Useful for testing)
==================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter" && proposal.classList.contains("show")){

yesBtn.click();

}

if(e.key==="Escape"){

window.location.reload();

}

});

/*==================================
SAFETY CHECKS
==================================*/

window.addEventListener("error",(e)=>{

console.log("Script Error:",e.message);

});

/*==================================
PRELOAD AUDIO
==================================*/

openingMusic.load();
/*==================================
RESET NO BUTTON
==================================*/

function resetNoButton(){

    noBtn.style.position = "relative";
    noBtn.style.left = "0";
    noBtn.style.top = "0";
    noBtn.textContent = "NO 🙈";

}

/*==================================
PAGE VISIBILITY
==================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        if(openingMusic && !openingMusic.paused){

            openingMusic.pause();

        }

    }else{

        if(openingMusic &&
           openingMusic.paused &&
           intro.classList.contains("hide")){

            openingMusic.play().catch(()=>{});

        }

    }

});

/*==================================
INITIAL SETUP
==================================*/

resetNoButton();

proposal.classList.add("hidden");
yesSection.classList.add("hidden");
heartbeat.classList.add("hidden");
countdown.classList.add("hidden");
transition.classList.add("hidden");

/*==================================
PREVENT DOUBLE CLICKS
==================================*/

/*==================================
END OF FILE
==================================*/

});

    

