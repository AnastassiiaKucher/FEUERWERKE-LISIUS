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


document.querySelectorAll('.reason-title').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.nextElementSibling;
    const isOpen = text.classList.contains('open');

    // Закрываем все тексты
    document.querySelectorAll('.reason-text').forEach(t => t.classList.remove('open'));
    document.querySelectorAll('.reason-title').forEach(b => b.classList.remove('active'));

    // Открываем только текущий
    if (!isOpen) {
      button.classList.add('active');
      text.classList.add('open');
    }
  });
});
