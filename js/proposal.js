/*====================================================
    PROJECT MARION ❤️
    proposal.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
    AUDIO
    ==================================*/

    const storyMusic = document.getElementById("storyMusic");
    const endingMusic = document.getElementById("endingMusic");
    const voiceNote = document.getElementById("voiceNote");

    /*==================================
    BUTTONS
    ==================================*/

    const startStory = document.getElementById("startStory");
    const playVoiceBtn = document.getElementById("playVoiceBtn");
    const memoryButton = document.getElementById("memoryButton");

    /*==================================
    SECTIONS
    ==================================*/

    const storyOpening = document.getElementById("storyOpening");
    const envelopeSection = document.getElementById("envelopeSection");
    const letterSection = document.getElementById("letterSection");
    const voiceSection = document.getElementById("voiceSection");
    const endingSection = document.getElementById("endingSection");
    const memorySection = document.getElementById("memorySection");

    /*==================================
    ENVELOPE
    ==================================*/

    const envelope = document.getElementById("envelope");
    const waxSeal = document.getElementById("waxSeal");

    /*==================================
    LETTER
    ==================================*/

    const paragraphs = document.querySelectorAll(".letterParagraph");
    const signature = document.querySelector(".letterSignature");

    /*==================================
    SAFETY CHECK
    ==================================*/

    if (
        !startStory ||
        !storyOpening ||
        !envelopeSection ||
        !letterSection ||
        !voiceSection ||
        !endingSection ||
        !memorySection ||
        !envelope ||
        !waxSeal
    ) {

        console.log("Proposal page not fully loaded.");

        return;

    }

    /*==================================
    INITIAL STATE
    ==================================*/

    storyOpening.style.display = "flex";

    envelopeSection.style.display = "none";
    letterSection.style.display = "none";
    voiceSection.style.display = "none";
    endingSection.style.display = "none";
    memorySection.style.display = "none";

    paragraphs.forEach(paragraph => {

        paragraph.style.opacity = "0";
        paragraph.style.transform = "translateY(25px)";

    });

    if (signature) {

        signature.style.opacity = "0";
        signature.style.transform = "translateY(25px)";

    }

    /*==================================
    HELPER FUNCTIONS
    ==================================*/

    function showSection(section) {

        section.style.display = "flex";

        section.classList.add("showScene");

    }

    function hideSection(section) {

        section.style.display = "none";

        section.classList.remove("showScene");

    }

    function fadeStoryMusic(targetVolume = 0.45) {

        if (!storyMusic) return;

        storyMusic.volume = 0;

        storyMusic.play().catch(() => {});

        const fade = setInterval(() => {

            if (storyMusic.volume < targetVolume) {

                storyMusic.volume += 0.05;

            } else {

                storyMusic.volume = targetVolume;

                clearInterval(fade);

            }

        }, 150);

    }
    /*==================================
    START STORY
    ==================================*/

    startStory.addEventListener("click", () => {

        // Fade out opening
        storyOpening.style.transition = "opacity 0.8s ease";

        storyOpening.style.opacity = "0";

        setTimeout(() => {

            hideSection(storyOpening);

            showSection(envelopeSection);

            envelope.style.opacity = "0";
            envelope.style.transform = "translateY(-120px) scale(0.8)";

            requestAnimationFrame(() => {

                envelope.style.transition =
                    "all 1.2s ease";

                envelope.style.opacity = "1";
                envelope.style.transform =
                    "translateY(0) scale(1)";

            });

            fadeStoryMusic();

        }, 800);

    });





    /*==================================
    OPEN ENVELOPE
    ==================================*/

    waxSeal.addEventListener("click", () => {

        waxSeal.style.pointerEvents = "none";

        waxSeal.style.transform =
            "translate(-50%,-50%) scale(.85)";

        waxSeal.style.transition =
            "0.3s";

        setTimeout(() => {

            envelope.style.transition =
                "all .9s ease";

            envelope.style.transform =
                "scale(1.2)";

            envelope.style.opacity = "0";

        },300);

        setTimeout(() => {

            hideSection(envelopeSection);

            showSection(letterSection);

            revealLetter();

        },1200);

    });





    /*==================================
    LETTER ANIMATION
    ==================================*/

   function revealLetter() {

    paragraphs.forEach((paragraph) => {

        paragraph.style.opacity = "1";
        paragraph.style.transform = "translateY(0)";

    });

    if (signature) {

        signature.style.opacity = "1";
        signature.style.transform = "translateY(0)";

    }

    setTimeout(() => {

        showSection(voiceSection);

    }, 300);

}
    }
        /*==================================
    PLAY VOICE NOTE
    ==================================*/

    playVoiceBtn.addEventListener("click", () => {

        if (storyMusic && !storyMusic.paused) {

            storyMusic.volume = 0.15;

        }

        voiceNote.play();

        playVoiceBtn.disabled = true;

    });





    /*==================================
    VOICE NOTE FINISHED
    ==================================*/

    voiceNote.addEventListener("ended", () => {

        if (storyMusic) {

            storyMusic.volume = 0.45;

            storyMusic.pause();

        }

        if (endingMusic) {

            endingMusic.volume = 0.35;

            endingMusic.play().catch(() => {});

        }

        showSection(endingSection);

        endingSection.scrollIntoView({

            behavior: "smooth"

        });

        setTimeout(() => {

            showSection(memorySection);

            memorySection.scrollIntoView({

                behavior: "smooth"

            });

        }, 3000);

    });





    /*==================================
    MEMORY BUTTON
    ==================================*/

    memoryButton.addEventListener("click", (event) => {

        event.preventDefault();

        window.open(
            "https://photos.app.goo.gl/uWtiboqdjsFSoCwW9",
            "_blank"
        );

    });





    /*==================================
    ENDING ANIMATION
    ==================================*/

    if (endingSection) {

        endingSection.addEventListener("mouseenter", () => {

            endingSection.style.transform = "scale(1.01)";

        });

        endingSection.addEventListener("mouseleave", () => {

            endingSection.style.transform = "scale(1)";

        });

    }





    /*==================================
    PAGE READY
    ==================================*/

    console.log("Project Marion ❤️ loaded successfully.");

});
  
