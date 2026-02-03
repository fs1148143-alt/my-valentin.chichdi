const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");

// Tablet/Mobile ke liye touch fix
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Click hone se rokhne ke liye
    moveButton();
});

noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
    // Button ko random jagah bhejne ke liye
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "fixed"; // Isse screen par kahin bhi ja sakega
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

yesBtn.addEventListener("click", () => {
    document.querySelector('.buttons').style.display = "none";
    question.style.display = "none";
    message.classList.remove("hidden");
});
