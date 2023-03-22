const reserveButton = document.getElementById("reserve");
const nameInput = document.getElementById("name");
const genderInput = document.getElementById("gender");
const numberInput = document.getElementById("number");
const vehicleInput = document.getElementById("vehicle");
const zoneInput = document.getElementById("zone");

reserveButton.addEventListener("click", () => {
  let data = {
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
    alert("Space was booked");
  });
});
