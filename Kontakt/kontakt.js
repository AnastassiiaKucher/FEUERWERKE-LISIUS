// Ждём загрузку страницы
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".contact-form");
  const button = document.getElementById("submitBtn");

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData = new FormData(form);

    // можно показать "отправляется..."
    button.innerHTML = "Wird gesendet...";
    button.disabled = true;

    fetch("send.php", {
      method: "POST",
      body: formData
    })

    .then(response => response.text())

    .then(data => {

      button.classList.add("success");

      button.innerHTML = "✔ Formular gesendet";

    })

    .catch(error => {

      button.innerHTML = "Fehler. Nochmal versuchen";
      button.disabled = false;

    });

  });

});