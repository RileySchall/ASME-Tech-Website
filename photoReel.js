const photoObjs = [
    { src: "Assets/HAND Images/HandDemo1.JPG", alt: "Team working on robotic hand with visible wires, motors, and pulleys" },
    { src: "Assets/Photo Reel Images/20260122_183506.jpg", alt: "Two students building a tower out of marshmallows and toothpicks" },
    { src: "Assets/Photo Reel Images/FingerDaybuild2.jpg", alt: "Student assembling a finger made from cardboard" },
    { src: "Assets/Photo Reel Images/PaperAirplaneCompetition.jpg", alt: "Students holding paper airplanes" },
    { src: "Assets/HAND Images/HandDemo2.JPG", alt: "HAND DDC Demo 2" },
    { src: "Assets/Photo Reel Images/20260203_193716(0).jpg", alt: "Students standing on stairs holding paper airplanes." },
    { src: "Assets/HAND Images/HandDemo3.JPG", alt: "HAND DDC Demo 3" }
];

let photoReelContainer;
let photoReel;
let curPhoto = 0;
let intervalID = undefined;

function addPhotoReel() {
    photoReelContainer = document.getElementById("photo-reel-container");
    photoReel = document.getElementById("photo-reel");
    
    if (!photoReel) return;

    photoReel.innerHTML = "";
    photoObjs.forEach((photo, index) => {
        let img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.alt;
        img.setAttribute("aria-hidden", index === 0 ? "false" : "true");
        photoReel.appendChild(img);
    });

    photoReelContainer.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
    });

    let touchStartX = 0;
    photoReelContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    photoReelContainer.addEventListener("touchend", (e) => {
        let touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) next();
        if (touchEndX - touchStartX > 50) prev();
    }, { passive: true });

    resetInterval();
}

function goToPhoto(index) {
    curPhoto = index;
    const offset = -curPhoto * 100;
    photoReel.style.transform = `translateX(${offset}%)`;

    Array.from(photoReel.children).forEach((img, idx) => {
        img.setAttribute("aria-hidden", idx === curPhoto ? "false" : "true");
    });
}

function next() {
    if (curPhoto === photoObjs.length - 1) {
        goToPhoto(0);
    } else {
        goToPhoto(curPhoto + 1);
    }
    resetInterval();
}

function prev() {
    if (curPhoto === 0) {
        goToPhoto(photoObjs.length - 1);
    } else {
        goToPhoto(curPhoto - 1);
    }
    resetInterval();
}

function resetInterval(){
    clearInterval(intervalID);
    intervalID = setInterval(next, 5000);
}