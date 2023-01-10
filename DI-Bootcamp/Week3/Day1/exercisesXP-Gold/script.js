let table = document.body.firstElementChild;

let afficheTr = document.querySelectorAll("tr");

for (let i = 0; i < afficheTr.length; i++) {
  let row = afficheTr[i];
  let cells = row.querySelectorAll("td");

  for (let j = 0; j < cells.length; j++) {
    let cell = cells[j];
    if (i == j) {
      cell.style.backgroundColor = "red";
    }
  }
}
