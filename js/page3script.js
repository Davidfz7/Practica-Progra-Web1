const content_div = document.getElementById("content-div");

function getRandomPath() {
  const items = [
    "item6.webp",
    "item2.avif",
    "item8.png",
    "item5.webp",
    "item7.png",
    "item1.webp",
    "item3.png",
    "item4png",
  ];
  let randomNum = Math.floor(Math.random() * 8);
  let imgpath = "imgs/allitems/" + items[randomNum];
  return imgpath;
}

function createDivs() {
  for (let i = 1; i <= 4; i++) {
    let div = document.createElement("div");
    div.style.cssText = `
    display: flex; 
    align-items: center;
    flex-direction: column;
     border:solid black;`;
    div.className = "rest-divs";
    content_div.appendChild(div);
  }
}
function createButton() {
  let showmore_button = document.createElement("button");
  showmore_button.textContent = "Show More";
  //Button in the parent element

  showmore_button.style.cssText = `
  grid-column: 1 / span 4; 
  width: 15%; 
  margin: auto;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 4%;`;
  showmore_button.addEventListener("click", function () {
    createDivs();
    fillDivs();
    content_div.removeChild(content_div.querySelector("button"));
    content_div.appendChild(showmore_button);
  });
  return showmore_button;
}

function fillDivs() {
  // Get all div elements on the page
  const allDivs = content_div.getElementsByTagName("div");

  // Create an array to store div elements without img children
  const divsWithoutImages = [];

  for (let i = 0; i < allDivs.length; i++) {
    const div = allDivs[i];
    // Check if the div has any img elements as children
    if (!div.querySelector("img") && div.className == "rest-divs") {
      divsWithoutImages.push(div);
    }
  }

  // divsWithoutImages now contains all div elements without img children
  console.log("Los valores son " + divsWithoutImages);

  // Remove the first div element

  divsWithoutImages.forEach((div) => {
    let img = document.createElement("img");
    img.src = getRandomPath();
    img.style.cssText = `height: 200px; width: 200px;`;

    div.appendChild(img);
  });
}

createDivs();
fillDivs();
createDivs();
fillDivs();
content_div.appendChild(createButton());
