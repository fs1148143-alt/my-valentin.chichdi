const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainCard = document.getElementById("main-card");
const message = document.getElementById("message");

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener("click", () => {
    mainCard.classList.add("hidden");
    message.classList.remove("hidden");
});
