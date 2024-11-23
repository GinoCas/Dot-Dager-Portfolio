document.addEventListener("DOMContentLoaded", () => {
  const lumberjackContainer = document.getElementById("lumberjack-container");
  const openButton = document.getElementById("show-game");
  const closeButton = document.getElementById("close-game");

  openButton.addEventListener("click", () => {
    lumberjackContainer.classList.toggle("show");
  });
  closeButton.addEventListener("click", () => {
    lumberjackContainer.classList.toggle("show");
  });
});
