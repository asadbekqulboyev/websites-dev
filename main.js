import "./base.css";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
tippy("[data-tippy-content]");

// Light Mode Tugmasi
const lightModeButton = document.getElementById('lightMode');
// Dark Mode Tugmasi
const darkModeButton = document.getElementById('darkMode');
// Root element (HTML)
const rootElement = document.documentElement;

// Light Mode-ni yoqish
lightModeButton.addEventListener('click', () => {
  rootElement.classList.remove('dark'); // Dark Mode ni o'chirish
  localStorage.setItem('theme', 'light'); // Yangi tema holatini saqlash
});

// Dark Mode-ni yoqish
darkModeButton.addEventListener('click', () => {
  rootElement.classList.add('dark'); // Dark Mode ni yoqish
  localStorage.setItem('theme', 'dark'); // Yangi tema holatini saqlash
});

// Brauzer qayta yuklanganda saqlangan temani qo'llash
if (localStorage.getItem('theme') === 'dark') {
  rootElement.classList.add('dark'); // Agar oldingi holat dark bo'lsa, qayta yoqiladi
} else {
  rootElement.classList.remove('dark'); // Aks holda light holati saqlanadi
}
