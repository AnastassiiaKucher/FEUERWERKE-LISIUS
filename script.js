window.addEventListener('load', function () {
  const video = document.getElementById('myVideo');
  if (!video) return;

  // На всякий случай ещё раз делаем его беззвучным
  video.muted = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.log('Autoplay wurde blockiert:', err);
      // здесь потом можно показать кнопку "Play" поверх видео
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
