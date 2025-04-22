document.addEventListener("DOMContentLoaded", () => {
  // Ativa menu responsivo
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    });
  }

  // Decodifica e define o link do WhatsApp
  const encodedNumber = "NTUxMTk1NzE2NTA3OA==";
  const decodedNumber = atob(encodedNumber);
  const whatsappLinks = document.querySelectorAll(".whatsapp-link");

  if (whatsappLinks.length > 0) {
    whatsappLinks.forEach((link) => {
      link.href = `https://api.whatsapp.com/send?phone=${decodedNumber}`;
    });
  }
});
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  let isValid = true;

  const emailInput = document.querySelector("input[name='email']");
  const telefoneInput = document.querySelector("input[name='telefone']");
  const email = emailInput.value.trim();
  const telefone = telefoneInput.value.trim();

  const emailError = document.getElementById("email-error");
  const telefoneError = document.getElementById("telefone-error");

  // Limpa mensagens antigas
  emailError.textContent = "";
  telefoneError.textContent = "";
  emailInput.classList.remove("input-error");
  telefoneInput.classList.remove("input-error");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validação email
  if (!emailRegex.test(email)) {
    emailError.textContent = "Digite um e-mail válido.";
    emailInput.classList.add("input-error");
    isValid = false;
  }

  // Validação telefone
  if (telefone && telefone.replace(/\D/g, "").length < 11) {
    telefoneError.textContent =
      "Digite um número com DDD e 9 dígitos (ex: 11999999999).";
    telefoneInput.classList.add("input-error");
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});

// Limpar erro enquanto digita
document.querySelector("input[name='email']").addEventListener("input", () => {
  document.getElementById("email-error").textContent = "";
  emailInput.classList.remove("input-error");
});

document
  .querySelector("input[name='telefone']")
  .addEventListener("input", () => {
    document.getElementById("telefone-error").textContent = "";
    telefoneInput.classList.remove("input-error");
  });
