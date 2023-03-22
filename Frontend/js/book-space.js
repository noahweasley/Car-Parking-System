const reserveButton = document.getElementById("reserve");
const nameInput = document.getElementById("name");
const genderInput = document.getElementById("gender");
const numberInput = document.getElementById("number");
const vehicleInput = document.getElementById("vehicle");
const zoneInput = document.getElementById("zone");
const snackBar = document.getElementById("snackbar");

reserveButton.addEventListener("click", () => {
  const data = {
    name: nameInput.value,
    gender: genderInput.value,
    number: numberInput.value,
    vehicle: vehicleInput.value,
    zone: zoneInput.value
  };

  fetch("/book-park", {
    method: "POST",
    body: JSON.stringify(data)
  }).then((_res) => {
    snackBar.innerText = `Space reserved for ${data.name} `;
    snackBar.classList.add("show");
    setTimeout(() => {
      snackBar.classList.remove("show");
    }, 3000);
  });
});
