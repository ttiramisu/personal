
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.querySelector("footer span");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = `© ${currentYear} Jin Zijie`;
});
