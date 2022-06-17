async function deleteAll() {
  let ids = [];
  const matches = document.querySelectorAll(".checkbox");
  for (let [idx, val] of matches.entries()) {
    let input = document.getElementById("checkbox" + idx);
    if (input && input.checked == true) {
      ids.push(idx);
      await fetch("http://localhost:5000/delete-note/" + ids);
      // await fetch("http://localhost:5000/");
    }
    if (ids.length > 1) {
    }
  }
}
