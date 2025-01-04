document.addEventListener("DOMContentLoaded", () => {
  const whatsappFloat = document.getElementById("whatsapp-float");
  const whatsappBox = document.getElementById("whatsapp-box");
  const closeBtn = document.getElementById("close-btn");

  // Show the WhatsApp box
  whatsappFloat.addEventListener("click", () => {
    whatsappBox.classList.add("active");
  });

  // Hide the WhatsApp box
  closeBtn.addEventListener("click", () => {
    whatsappBox.classList.remove("active");
  });
});