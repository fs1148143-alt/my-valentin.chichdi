const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainCard = document.getElementById("main-card");
const message = document.getElementById("message");

function moveButton() {
    // Isse button screen ke kinaro se bahar nahi jayega
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.floor(Math.random() * maxX) + padding/2;
    const randomY = Math.floor(Math.random() * maxY) + padding/2;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Mobile touch aur Mouse dono ke liye
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Button click na ho jaye
    moveButton();
});
noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {
    mainCard.classList.add("hidden");
    message.classList.remove("hidden");
});
