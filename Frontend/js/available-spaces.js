const addButton = document.getElementById("add");
const tableBody = document.getElementsByTagName("tbody")[0];

// const baseURLPath = "";
// const requestURLPath = "";
// const baseURL = new URL("/", baseURLPath);
// const requestURL = new URL(requestURLPath, baseURL);

addButton.addEventListener("click", () => {
  window.location.href = "../pages/add-available-space.html";
});

fetch("../mock/space.json")
  .then((response) => response.json())
  .then((jsonArray) => showZoneDetails(jsonArray))
  .catch(console.error);

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
