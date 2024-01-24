const appikey = "zQBzlGb3ZBXG7nHa4CjdVn1bP5K1qsuPhVMp9TzOV0g";

const formEl = document.querySelector("form");
const inputEl = docment.getElementById("search-inpt");
const searchResults = document.querySelector(".search-reslts");
const showMore = document.getElementById("show-more-button");

let inputdata = "";
let page = 1;

async function searchImage() {
  inputdata = inputEl.value;
  const url = `https://api.unplash.com/search/photos?page=${page}$query=${inpuutdata}$client_id=${accessKey}}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if (page == 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => {
    const imagewapper = document.createElement("div");
    imagewapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = results.urls.small;
    image.alt = results.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt.alt_description;

    searchResults.appendChild(image);
    searchResults.appendChild(imageLink);
    searchResults.appendChild(imagewapper);
  });

  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImage();
});

showMore.addEventListener("click", () => {
  searchImage();
});
