const reserveButton = document.getElementById("reserve");
const nameInput = document.getElementById("name");
const genderInput = document.getElementById("gender");
const numberInput = document.getElementById("number");
const vehicleInput = document.getElementById("vehicle");
const zoneInput = document.getElementById("zone");
const snackBar = document.getElementById("snackbar");

const baseURLPath = "";
const requestURLPath = "";
const baseURL = new URL("/", baseURLPath);
const requestURL = new URL(requestURLPath, baseURL);

reserveButton.addEventListener("click", () => {
  const data = {
    name: nameInput.value,
    gender: genderInput.value,
    number: numberInput.value,
    vehicle: vehicleInput.value,
    zone: zoneInput.value
  };

  if (data.name && data.gender && data.number && data.vehicle && data.zone) {
    fetch(requestURL, {
      method: "POST",
      body: JSON.stringify(data)
    }).then((_res) => {
      const message = `Space reserved for ${data.name} `;
      showToast(message);
    });
  } else {
    showToast("All fields are required, please fill them first");
  }
});

function showToast(message) {
  snackBar.innerText = message;
  snackBar.classList.add("show");
  setTimeout(() => snackBar.classList.remove("show"), 3000);
}
