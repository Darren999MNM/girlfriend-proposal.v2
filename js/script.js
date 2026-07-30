/*====================================================
PROJECT MARION ❤️
script.js
====================================================*/


document.addEventListener("DOMContentLoaded",()=>{


const loader=document.getElementById("loader");

const intro=document.getElementById("intro");

const startButton=document.getElementById("startButton");

const openingMusic=document.getElementById("openingMusic");


const countdown=document.getElementById("countdownSection");

const countNumber=document.getElementById("countNumber");


const heartbeat=document.getElementById("heartbeatScene");


const proposal=document.getElementById("proposalSection");


const yesBtn=document.getElementById("yesBtn");

const noBtn=document.getElementById("noBtn");


const yesSection=document.getElementById("yesSection");


const continueBtn=document.getElementById("continueBtn");


const transition=document.getElementById("transitionSection");

const fade=document.getElementById("screenFade");





/*==================================
LOADER
==================================*/


setTimeout(()=>{


if(loader){

loader.classList.add("loaderHide");


setTimeout(()=>{

loader.style.display="none";

},1000);


}


},3000);







/*==================================
START BUTTON
==================================*/


if(startButton){


startButton.addEventListener("click",async()=>{


if(openingMusic){


openingMusic.volume=0.45;


try{

await openingMusic.play();

}

catch(error){

console.log("Music blocked");

}


}



intro.classList.add("hide");


countdown.classList.remove("hidden");

countdown.classList.add("show");



startCountdown();



});


}







/*==================================
COUNTDOWN
==================================*/


function startCountdown(){


let count=3;


countNumber.textContent=count;



const timer=setInterval(()=>{


count--;


if(count>0){


countNumber.textContent=count;


}


else if(count===0){


countNumber.textContent="❤️";


}


else{


clearInterval(timer);



countdown.classList.remove("show");

countdown.classList.add("hide");



showHeartbeat();



}


},1000);



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



},4000);



}







/*==================================
PROPOSAL
==================================*/


function showProposal(){


proposal.classList.remove("hidden");

proposal.classList.add("show");


}








/*==================================
NO BUTTON ESCAPE
==================================*/


const messages=[

"😂 Nice try",

"🥺 Don't leave me",

"💕 You know the answer",

"😝 Almost",

"❤️ Choose YES"

];


let noCount=0;



if(noBtn){



noBtn.addEventListener("mouseenter",()=>{


const area=document.querySelector(".buttonArea");


const x=Math.random()*(area.clientWidth-100);

const y=Math.random()*(area.clientHeight-50);



noBtn.style.position="absolute";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";



if(noCount<messages.length){


noBtn.textContent=messages[noCount];

noCount++;


}



});



}









/*==================================
YES BUTTON
==================================*/


if(yesBtn){



yesBtn.addEventListener("click",()=>{


proposal.classList.remove("show");

proposal.classList.add("hide");



yesSection.classList.remove("hidden");

yesSection.classList.add("show");



fireworks();



});



}








/*==================================
FIREWORKS
==================================*/


function fireworks(){


if(typeof confetti!=="function") return;



const end=Date.now()+5000;



(function loop(){


confetti({

particleCount:8,

spread:80,

origin:{x:Math.random(),y:.6}

});



if(Date.now()<end){

requestAnimationFrame(loop);

}



})();



}








/*==================================
CONTINUE
==================================*/


if(continueBtn){


continueBtn.addEventListener("click",()=>{


if(fade){

fade.classList.add("active");

}



setTimeout(()=>{


window.location.href="proposal.html";


},2500);



});


}








/*==================================
KEYBOARD
==================================*/


document.addEventListener("keydown",(e)=>{


if(e.key==="Escape"){

location.reload();

}



if(e.key==="Enter" && proposal.classList.contains("show")){


yesBtn.click();


}



});





});
    

