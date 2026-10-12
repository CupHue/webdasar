
import { gsap, TweenLite } from "../node_modules/gsap/index.js";
import { DrawSVGPlugin } from "../node_modules/gsap/DrawSVGPlugin.js";

document.addEventListener("DOMContentLoaded", (event) => {

gsap.registerPlugin(DrawSVGPlugin);

TweenLite.fromTo("#ttd",3,{drawSVG:"0%", delay:0.01},{drawSVG:"90%", delay:0.5});

const mahface = document.getElementById("mahface");
const faceImgs = mahface.querySelectorAll("img");
let currentIndex = -1;

function setRandomFace() {
    let nextIndex;
    // Ensure the new random image is not the same as the current one
    do {
        nextIndex = Math.floor(Math.random() * faceImgs.length);
    } while (faceImgs.length > 1 && nextIndex === currentIndex);

    currentIndex = nextIndex;

    // Toggle hidden class
    faceImgs.forEach((img, index) => {
        if (index === currentIndex) {
        img.classList.remove("hidden");
        // Optional subtle GSAP pop animation on change
        TweenLite.fromTo(img, { scale: 0.9, opacity: 0.7 }, { scale: 1, opacity: 1, duration: 0.25 });
        } else {
        img.classList.add("hidden");
        }
    });
}

// 1. Show a random image on page load
// setRandomFace();

currentIndex = 0

// 2. Change to another image when clicked
mahface.addEventListener("click", setRandomFace);

});
