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

  
    startStory.addEventListener("click", async () => {

        // Hide opening
        storyOpening.style.display = "none";

        // Show only the letter first
// Show the letter
letterSection.classList.add("showSection");

// Keep other sections hidden (CSS controls this)
timelineSection.classList.remove("showSection");
gallerySection.classList.remove("showSection");
videoSection.classList.remove("showSection");
voiceSection.classList.remove("showSection");
endingSection.classList.remove("showSection");

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
/*==================================
UNLOCK TIMELINE
==================================*/

window.addEventListener("scroll", revealTimeline);

function revealTimeline() {

    if (
        window.scrollY > 500 &&
        timelineSection.style.display === "none"
    ) {

       timelineSection.style.display = "block";

timelineSection.style.marginTop = "120px";

timelineSection.style.opacity = "0";

timelineSection.style.transform = "translateY(40px)";

timelineSection.style.transition = "all 1s ease";
        requestAnimationFrame(() => {

            timelineSection.style.opacity = "1";
            timelineSection.style.transform = "translateY(0)";
            setTimeout(() => {

    timelineSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}, 800);

        });

        window.removeEventListener("scroll", revealTimeline);
    }

}
    });

    /*==================================
    IMAGE ANIMATIONS
    ==================================*/

    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach((image) => {

        image.style.cursor = "pointer";

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.05)";
            image.style.transition = "0.4s";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

        image.addEventListener("click", () => {

            image.style.transform = "scale(1.15)";

            setTimeout(() => {

                image.style.transform = "scale(1)";

            }, 250);

        });

    });

    /*==================================
    VIDEO SETTINGS
    ==================================*/

    const videos = document.querySelectorAll(".videos video");

    videos.forEach((video) => {

        video.preload = "metadata";

        video.addEventListener("play", () => {

            videos.forEach((other) => {

                if (other !== video) {

                    other.pause();

                }

            });

        });

    });

    /*==================================
    AUTO PLAY ENDING MUSIC
    ==================================*/

    if (endingMusic) {

        endingMusic.volume = 0.35;

        window.addEventListener("scroll", () => {

            const bottomReached =

                window.innerHeight + window.scrollY >=

                document.body.offsetHeight - 20;

            if (bottomReached && endingMusic.paused) {

                endingMusic.play().catch(() => {});

            }

        });

    }


/*==================================
SECTION REVEAL ANIMATION
==================================*/



/*==================================
LETTER PARAGRAPH FADE-IN
==================================*/

const letterParagraphs = document.querySelectorAll(".loveLetter p");

letterParagraphs.forEach((paragraph, index) => {

    paragraph.style.opacity = "0";
    paragraph.style.transform = "translateY(20px)";

    setTimeout(() => {

        paragraph.style.transition = "all 0.8s ease";
        paragraph.style.opacity = "1";
        paragraph.style.transform = "translateY(0)";

    }, 300 + (index * 180));

});

/*==================================
ENDING CARD ANIMATION
==================================*/

const endingCard = document.querySelector(".endingCard");

if (endingCard) {

    endingCard.addEventListener("mouseenter", () => {

        endingCard.style.transform = "scale(1.03)";
        endingCard.style.transition = "0.4s";

    });

    endingCard.addEventListener("mouseleave", () => {

        endingCard.style.transform = "scale(1)";

    });

}

/*==================================
PHOTO HOVER EFFECT
==================================*/

galleryImages.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.boxShadow =
            "0 0 30px rgba(255,105,180,0.6)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.boxShadow = "none";

    });

/*==================================
VOICE NOTE SECTION
==================================*/

const voicePlayer = document.querySelector(".voiceSection audio");

if (voicePlayer) {

    voicePlayer.volume = 1;

    voicePlayer.addEventListener("play", () => {

        if (storyMusic && !storyMusic.paused) {

            storyMusic.volume = 0.15;

        }

    });

    voicePlayer.addEventListener("pause", () => {

        if (storyMusic) {

            storyMusic.volume = 0.45;

        }

    });

    voicePlayer.addEventListener("ended", () => {

        if (storyMusic) {

            storyMusic.volume = 0.45;

        }

    });

}

/*==================================
PHOTO LOADING EFFECT
==================================*/

galleryImages.forEach((image) => {

    image.loading = "lazy";

    image.addEventListener("load", () => {

        image.style.opacity = "1";

    });

});

/*==================================
VIDEO ENDED
==================================*/

videos.forEach((video) => {

    video.addEventListener("ended", () => {

        video.currentTime = 0;

    });

});

/*==================================
PAGE FINISHED LOADING
==================================*/

console.log("Project Marion ❤️ proposal page loaded successfully.");
});
    });

    
