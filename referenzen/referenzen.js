// Плавный горизонтальный слайдер отзывов с динамической высотой viewport
(function () {
  const track = document.querySelector('.reviews-track');
  const slides = Array.from(document.querySelectorAll('.review-slide'));
  const prevBtn = document.querySelector('.reviews-prev');
  const nextBtn = document.querySelector('.reviews-next');
  const viewport = document.querySelector('.reviews-viewport');

  if (!track || slides.length === 0) return;

  let current = 0;

  function goTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));

  // Динамически вычисляем максимальную высоту слайдов и задаём вьюпорту,
  // чтобы при переключении не было "прыжков" вверх/вниз
  function updateViewportHeight() {
    // немного задержим вычисление, чтобы все шрифты/картинки успели отрисоваться
    requestAnimationFrame(() => {
      let max = 0;
      slides.forEach(s => {
        // сброс временно (на случай адаптивных изменений)
        s.style.minHeight = '';
        const h = s.getBoundingClientRect().height;
        if (h > max) max = h;
      });
      // если вдруг рассчиталось мало — ставим запас
      if (max < 200) max = 200;
      viewport.style.height = Math.ceil(max) + 'px';
    });
  }

  // Запускаем на старте и при ресайзе
  window.addEventListener('load', updateViewportHeight);
  window.addEventListener('resize', updateViewportHeight);

  // поддержка клавиш ← и →
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  // Инициализация
  goTo(0);
  // немного позже обновим высоту (если грузятся картинки)
  setTimeout(updateViewportHeight, 500);
})();

(function () {
  const MOBILE_BREAKPOINT = 900;

  // Запомним, где изначально лежали .client, чтобы вернуть обратно
  const originalParents = new Map();

  function moveClientsIntoBoxes() {
    const slides = document.querySelectorAll(".review-slide");

    slides.forEach(slide => {
      const boxes = slide.querySelectorAll(".boxes .box");
      const clients = slide.querySelectorAll(".clients .client");

      // Сопоставляем по индексу: 1-й отзыв -> 1-й клиент, 2-й отзыв -> 2-й клиент
      boxes.forEach((box, i) => {
        const client = clients[i];
        if (!client) return;

        if (!originalParents.has(client)) {
          originalParents.set(client, client.parentElement);
        }

        // переносим клиента внутрь .box (в самый конец)
        box.appendChild(client);
      });
    });
  }

  function restoreClientsBack() {
    // возвращаем каждого клиента туда, где он был изначально
    originalParents.forEach((parent, client) => {
      if (parent && parent.contains(client) === false) {
        parent.appendChild(client);
      } else if (parent) {
        parent.appendChild(client);
      }
    });
  }

  function applyLayout() {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      moveClientsIntoBoxes();
    } else {
      restoreClientsBack();
    }
  }

  window.addEventListener("load", applyLayout);
  window.addEventListener("resize", applyLayout);
})();
