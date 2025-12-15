const yes = document.getElementById("yes");
const no = document.getElementById("no");
const note = document.getElementById("note");

let heartRainStarted = false;

// HÀM CHẠY KHI "QUAY LẠI"
function onYesSelected() {
  note.innerText = "Tui biết mà, yêu Phương 💖";

  if (!heartRainStarted) {
    heartRainStarted = true;

    setInterval(() => {
      const heart = document.createElement("div");
      heart.innerText = "💖";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "-20px";
      heart.style.fontSize = Math.random() * 20 + 16 + "px";
      heart.style.opacity = Math.random();
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";

      document.body.appendChild(heart);

      const fallDuration = Math.random() * 2000 + 3000;

      heart.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(110vh)" }
        ],
        {
          duration: fallDuration,
          easing: "linear"
        }
      );

      setTimeout(() => heart.remove(), fallDuration);
    }, 300);
  }
}

// BẤM "CHỊU"
yes.addEventListener("click", () => {
  onYesSelected();
});

// BẤM "KHÔNG CHỊU" → ÉP VỀ "CHỊU" + CHẠY HIỆU ỨNG
no.addEventListener("click", () => {
  setTimeout(() => {
    yes.checked = true;
    onYesSelected();
    note.innerText = "Hình như Phương bấm lộn ròi đó hehe 💕";
  }, 300);
});