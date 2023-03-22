const invalidLink = document.getElementById("invalid");
const snackBar = document.getElementById("snackbar");

invalidLink.addEventListener("click", () => {
  snackBar.classList.add("show");
  setTimeout(() => {
    snackBar.classList.remove("show");
  }, 3000);
});
