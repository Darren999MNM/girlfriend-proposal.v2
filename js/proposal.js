/*====================================================
PROJECT MARION ❤️
proposal.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
    ELEMENTS
    ==================================*/

    const storyMusic = document.getElementById("storyMusic");
    const endingMusic = document.getElementById("endingMusic");

    const startStoryBtn = document.getElementById("startStory");

    const storyOpening = document.querySelector(".storyOpening");

    const letterSection = document.querySelector(".letterSection");
    const timelineSection = document.querySelector(".timelineSection");
    const gallerySection = document.querySelector(".gallerySection");
    const videoSection = document.querySelector(".videoSection");
    const voiceSection = document.querySelector(".voiceSection");
    const endingSection = document.querySelector(".endingSection");

    const videos = document.querySelectorAll("video");

    const galleryImages = document.querySelectorAll(".gallery img");

    const loveLetter = document.querySelector(".loveLetter");



    /*==================================
    INITIAL STATE
    ==================================*/

    if (letterSection) letterSection.style.display = "none";
    if (timelineSection) timelineSection.style.display = "none";
    if (gallerySection) gallerySection.style.display = "none";
    if (videoSection) videoSection.style.display = "none";
    if (voiceSection) voiceSection.style.display = "none";
    if (endingSection) endingSection.style.display = "none";



    /*==================================
    START STORY
    ==================================*/

    if (startStoryBtn) {

        startStoryBtn.addEventListener("click", async () => {

            try {

                if (storyMusic) {

                    storyMusic.volume = 0;

                    await storyMusic.play();

                    fadeInMusic(storyMusic, 0.45, 2500);

                }

            } catch (error) {

                console.log("Music could not autoplay.");

            }

            storyOpening.style.display = "none";

            showLetter();

        });

    }



    /*==================================
    SHOW LETTER
    ==================================*/

    function showLetter() {

        if (!letterSection) return;

        letterSection.style.display = "block";

        letterSection.classList.add("fadeUp");

        typeLetter();

    }



    /*==================================
    TYPEWRITER
    ==================================*/

    function typeLetter() {

        if (!loveLetter) return;

        const paragraphs = loveLetter.querySelectorAll("p, h2");

        paragraphs.forEach(p => {

            p.style.opacity = "0";

        });

        let index = 0;

        function revealNext() {

            if (index >= paragraphs.length) {

                showTimeline();

                return;

            }

            paragraphs[index].style.transition = "opacity .8s ease";

            paragraphs[index].style.opacity = "1";

            index++;

            setTimeout(revealNext, 900);

        }

        revealNext();

    }
      /*==================================
    SHOW TIMELINE
    ==================================*/

    function showTimeline() {

        if (!timelineSection) return;

        timelineSection.style.display = "block";

        timelineSection.classList.add("fadeUp");

        setTimeout(showGallery, 800);

    }



    /*==================================
    SHOW GALLERY
    ==================================*/

    function showGallery() {

        if (!gallerySection) return;

        gallerySection.style.display = "block";

        gallerySection.classList.add("fadeUp");

        galleryImages.forEach((image, index) => {

            image.style.opacity = "0";
            image.style.transform = "translateY(30px)";

            setTimeout(() => {

                image.style.transition = "all .8s ease";
                image.style.opacity = "1";
                image.style.transform = "translateY(0)";

            }, index * 180);

        });

        setTimeout(showVideos, galleryImages.length * 180 + 600);

    }



    /*==================================
    SHOW VIDEOS
    ==================================*/

    function showVideos() {

        if (!videoSection) return;

        videoSection.style.display = "block";

        videoSection.classList.add("fadeUp");

        setTimeout(showVoiceNote, 1000);

    }



    /*==================================
    SHOW VOICE NOTE
    ==================================*/

    function showVoiceNote() {

        if (!voiceSection) return;

        voiceSection.style.display = "block";

        voiceSection.classList.add("fadeUp");

        setTimeout(showEnding, 1000);

    }



    /*==================================
    SHOW ENDING
    ==================================*/

    function showEnding() {

        if (!endingSection) return;

        endingSection.style.display = "block";

        endingSection.classList.add("fadeUp");

    }



    /*==================================
    MUSIC HELPERS
    ==================================*/

    function fadeInMusic(audio, targetVolume = 0.45, duration = 2000) {

        if (!audio) return;

        audio.volume = 0;

        const step = targetVolume / (duration / 50);

        const timer = setInterval(() => {

            if (audio.volume < targetVolume - step) {

                audio.volume += step;

            } else {

                audio.volume = targetVolume;

                clearInterval(timer);

            }

        }, 50);

    }



    function fadeOutMusic(audio, duration = 2000) {

        if (!audio) return;

        const step = audio.volume / (duration / 50);

        const timer = setInterval(() => {

            if (audio.volume > step) {

                audio.volume -= step;

            } else {

                audio.volume = 0;

                audio.pause();

                clearInterval(timer);

            }

        }, 50);

    }
