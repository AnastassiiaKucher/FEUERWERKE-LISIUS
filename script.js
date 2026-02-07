document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");

    if (video) {
        video.muted = true; 
        video.play().catch(() => {
            // iOS иногда блокирует play() до загрузки
            setTimeout(() => {
                video.play().catch(err => console.log("Autoplay block:", err));
            }, 500);
        });
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".btn");

    button.style.opacity = "0";
    button.style.transition = "opacity 1.5s ease-in";

    setTimeout(() => {
        button.style.opacity = "1";
    }, 2000);
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".reason-title");

  // 👉 сразу открываем первый пункт
  if (buttons.length > 0) {
    buttons[0].classList.add("active");
    const firstText = buttons[0].nextElementSibling;
    if (firstText) firstText.classList.add("open");
  }

  // 👉 клики по кнопкам
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const text = button.nextElementSibling;
      const isOpen = text.classList.contains("open");

      document.querySelectorAll(".reason-text").forEach((t) =>
        t.classList.remove("open")
      );
      buttons.forEach((b) => b.classList.remove("active"));

      if (!isOpen) {
        button.classList.add("active");
        text.classList.add("open");
      }
    });
  });
});
