/*====================================================
    PROJECT MARION ❤️
    script.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        ELEMENTS
    ==========================================*/

    const loader = document.getElementById("loader");

    const startButton = document.getElementById("startButton");

    const openingMusic = document.getElementById("openingMusic");

    const intro = document.getElementById("intro");

    const countdown = document.getElementById("countdownSection");

    const heartbeat = document.getElementById("heartbeatScene");

    const proposal = document.getElementById("proposalSection");

    const number = document.getElementById("countNumber");

    const yesBtn = document.getElementById("yesBtn");

    const noBtn = document.getElementById("noBtn");

    const yesSection = document.getElementById("yesSection");

    const continueBtn = document.getElementById("continueBtn");

    const transition = document.getElementById("transitionSection");

    const proposalLink = document.getElementById("proposalLink");

    const fade = document.getElementById("screenFade");

    /*==========================================
        LOADER
    ==========================================*/

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("loaderHide");

        }, 2800);

    });

    /*==========================================
        START EXPERIENCE
    ==========================================*/

    startButton.addEventListener("click", async () => {

        try{

            openingMusic.volume = 0.45;

            await openingMusic.play();

        }catch(error){

            console.log("Music will start after interaction.");

        }

        intro.classList.add("hide");

        countdown.classList.remove("hidden");

        countdown.classList.add("show");

        startCountdown();

    });

    /*==========================================
        COUNTDOWN
    ==========================================*/

    function startCountdown(){

        let count = 3;

        number.textContent = count;

        const timer = setInterval(() => {

            count--;

            if(count > 0){

                number.textContent = count;

            }

            else if(count === 0){

                number.textContent = "💕";

            }

            else{

                clearInterval(timer);

                countdown.classList.remove("show");

                countdown.classList.add("hide");

                showHeartbeat();

            }

        }, 1200);

    }

    /*==========================================
        HEARTBEAT
    ==========================================*/

    function showHeartbeat(){

        heartbeat.classList.remove("hidden");

        heartbeat.classList.add("show");

        setTimeout(() => {

            heartbeat.classList.remove("show");

            heartbeat.classList.add("hide");

            showProposal();

        }, 4500);

    }

    /*==========================================
        PROPOSAL
    ==========================================*/

    function showProposal(){

        proposal.classList.remove("hidden");

        proposal.classList.add("fadeIn");

    }

