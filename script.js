// ===== VIDEO AUTOPLAY (если есть) =====
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");

  if (video) {
    video.muted = true;
    video.play().catch(() => {
      // iOS иногда блокирует play() до загрузки
      setTimeout(() => {
        video.play().catch((err) => console.log("Autoplay block:", err));
      }, 500);
    });
  }
});

// ===== FADE-IN BUTTON (если есть .btn) =====
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn");
  if (!button) return;

  button.style.opacity = "0";
  button.style.transition = "opacity 1.5s ease-in";

  setTimeout(() => {
    button.style.opacity = "1";
  }, 2000);
});

// ===== REASONS: первый открыт сразу + можно открыть несколько =====
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".reason-title");

  // ✅ открыть первый пункт при загрузке
  if (buttons.length > 0) {
    buttons[0].classList.add("active");
    const firstText = buttons[0].nextElementSibling;
    if (firstText) firstText.classList.add("open");
  }

  // ✅ клики: НЕ закрываем другие, просто toggle текущий
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const text = button.nextElementSibling;
      if (!text) return;

      button.classList.toggle("active");
      text.classList.toggle("open");
    });
  });
});
