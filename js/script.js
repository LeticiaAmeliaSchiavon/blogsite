// Inicializa AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, once: true });
});

// Comentários
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("commentForm");
  const list = document.getElementById("commentsList");

  // Carrega comentários
  const savedComments =
    JSON.parse(localStorage.getItem("letiBlogComments")) || [];
  savedComments.forEach(({ name, text }) => renderComment(name, text));

  if (form && list) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("commentName").value.trim();
      const text = document.getElementById("commentText").value.trim();

      if (name && text) {
        const comment = { name, text };

        // Salva
        savedComments.unshift(comment);
        localStorage.setItem("letiBlogComments", JSON.stringify(savedComments));

        renderComment(name, text);
        form.reset();
      }
    });
  }

  function renderComment(name, text) {
    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerHTML = `<p><strong>${name}</strong> says:</p><p>${text}</p>`;
    list.prepend(comment);
  }
});

// Formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const response = document.getElementById("formResponse");

      if (name.length < 2 || !email.includes("@") || message.length < 10) {
        response.textContent =
          "Por favor, preencha todos os campos corretamente.";
      } else {
        response.textContent = "Mensagem enviada!";
        form.reset();
      }
    });
  }
});
