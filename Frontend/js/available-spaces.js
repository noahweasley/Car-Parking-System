const addButton = document.getElementById("add");
const tableBody = document.getElementsByTagName("tbody")[0];
const snackBar = document.getElementById("snackbar");

const baseURLPath = "https://car-spacebooking.onrender.com/";
const requestURLPath = "api/car-parks";
const baseURL = new URL("/", baseURLPath);
const requestURL = new URL(requestURLPath, baseURL);

addButton.addEventListener("click", () => {
  showToast("Not available at the moment");
});

fetch(requestURL)
  .then((response) => response.json())
  .then((jsonArray) => showZoneDetails(jsonArray))
  .catch(showToast);

function showZoneDetails(jsonArray) {
  jsonArray.forEach((json) => {
    tableBody.append(createTableRow(json));
  });

  function createTableRow(json) {
    const tableRow = document.createElement("tr");
    Object.values(json).forEach((key) => {
      const tableData = document.createElement("td");
      tableData.innerText = key;
      tableRow.append(tableData);
    });

    return tableRow;
  }
}
function showToast(message) {
  snackBar.innerText = message;
  snackBar.classList.add("show");
  setTimeout(() => snackBar.classList.remove("show"), 3000);
}
