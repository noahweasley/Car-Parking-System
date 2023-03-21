const tableBody = document.getElementsByTagName("tbody")[0];

fetch("../mock/members.json")
  .then((response) => response.json())
  .then((jsonArray) => showMembers(jsonArray))
  .catch(console.error);

function showMembers(jsonArray) {
  let jsonArray1 = [...jsonArray];
  jsonArray1 = jsonArray1.sort((a, b) => a.regno > b.regno);
  
  jsonArray1.forEach((json) => {
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
