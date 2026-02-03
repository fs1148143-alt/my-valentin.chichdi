const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainCard = document.getElementById("main-card");
const message = document.getElementById("message");

function moveButton() {
    // Button ko fixed karke screen par kahin bhi bhagaenge
    noBtn.style.position = "fixed"; 
    
    const padding = 60;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.floor(Math.random() * maxX) + padding/2;
    const randomY = Math.floor(Math.random() * maxY) + padding/2;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Touch aur Mouse dono handle honge
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener("click", () => {
    mainCard.style.display = "none";
    message.classList.remove("hidden");
});
