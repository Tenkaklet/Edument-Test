const fileForm = document.querySelector("#file-form");
const fileInput = document.querySelector("#file-input");
const characterName = document.querySelector("#character-name");
const fileResults = document.querySelector("#file-results");
const fileTree = document.querySelector("#file-tree");
const fileMetaList = document.querySelector(".meta");
const fileItems = ["marvel/black_widow/bw.png", "marvel/drdoom/the- doctor.png", "fact_marvel_beats_dc.txt", "dc/aquaman/mmmmmomoa.png", "marvel/black_widow/why-the-widow-is-awesome.txt", "dc/aquaman/movie-review- collection.txt"];

// Attach fileItems to fileResults
fileItems.forEach(item => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  fileMetaList.appendChild(li);
});

fileForm.addEventListener("submit", e => {
  e.preventDefault();
  const file = fileInput.files[0];
  addItem(file.name);
});

const addItem = item => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  fileMetaList.appendChild(li);
}

document.querySelector('.category').addEventListener('click', e => {
  fileMetaList.classList.toggle('active');
});




