/*====================================================
    PROJECT MARION ❤️
    proposal.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    // AUDIO
    const storyMusic = document.getElementById("storyMusic");
    const endingMusic = document.getElementById("endingMusic");

    // BUTTON
    const startStory = document.getElementById("startStory");

    // SECTIONS
    const storyOpening = document.querySelector(".storyOpening");
    const letterSection = document.querySelector(".letterSection");
    const timelineSection = document.querySelector(".timelineSection");
    const gallerySection = document.querySelector(".gallerySection");
    const videoSection = document.querySelector(".videoSection");
    const voiceSection = document.querySelector(".voiceSection");
    const endingSection = document.querySelector(".endingSection");

    // Safety check
    if (
        !startStory ||
        !storyOpening ||
        !letterSection ||
        !timelineSection ||
        !gallerySection ||
        !videoSection ||
        !voiceSection ||
        !endingSection
    ) {
        console.log("Proposal page elements missing.");
        return;
    }

    // Hide everything except opening
    letterSection.style.display = "none";
    timelineSection.style.display = "none";
    gallerySection.style.display = "none";
    videoSection.style.display = "none";
    voiceSection.style.display = "none";
    endingSection.style.display = "none";

    startStory.addEventListener("click", async () => {

        // Hide opening
        storyOpening.style.display = "none";

        // Show all sections
        letterSection.style.display = "block";
        timelineSection.style.display = "block";
        gallerySection.style.display = "block";
        videoSection.style.display = "block";
        voiceSection.style.display = "block";
        endingSection.style.display = "block";

        // Start music
        if (storyMusic) {
            storyMusic.volume = 0;

            try {
                await storyMusic.play();

                const fade = setInterval(() => {

                    if (storyMusic.volume < 0.45) {

                        storyMusic.volume += 0.05;

                    } else {

                        storyMusic.volume = 0.45;
                        clearInterval(fade);

                    }

                }, 150);

            } catch (err) {

                console.log(err);

            }
        }

        // Scroll to the letter
        letterSection.scrollIntoView({

            behavior: "smooth"

        });

    });

});

    
