import recettesDB from "./recettesDB.js";

// Retrieve all recipes from the database
const recipes = recettesDB;

// Get the recipe id parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');

const imageList = [`../assets/recettes/${recipeId}/1.png`,
                   `../assets/recettes/${recipeId}/2.png`,
                   `../assets/recettes/${recipeId}/3.png`,
                   `../assets/recettes/${recipeId}/4.png`];

function changeImage() {
  const image = this.querySelector('img');
  const currentImageName = image.src.split('/').pop();
  const currentImageBaseName = parseInt(currentImageName.split('.').shift()) - 1;
  const nextImageIndex = (currentImageBaseName  + 1) % imageList.length;
  const nextImageName = imageList[nextImageIndex];
  image.src = `${nextImageName}`;
}

const contentContainer = document.querySelector(".content-container");

function renderRecipe(recipes) {
  // Create recipe name element
  const name = document.createElement("h1");
  name.innerText = recipes[recipeId - 1].name;
  contentContainer.appendChild(name);

  const changeImageNote = document.createElement("h4");
  changeImageNote.innerText = "(Click on the image to change it!)";
  contentContainer.appendChild(changeImageNote);

  // Create recipe image container element
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  imgContainer.onclick = changeImage;

  // Create recipe image element
  const img = document.createElement("img");
  img.src = `../assets/recettes/${recipes[recipeId - 1].id}/1.png`;
  img.alt = recipes[recipeId - 1].name;
  
  imgContainer.appendChild(img);
  contentContainer.appendChild(imgContainer);

  // Create recipe details container element
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  // Create recipe ingredients element
  const ingredientsTitle = document.createElement("h2");
  ingredientsTitle.innerText = "Ingredients:";
  detailsContainer.appendChild(ingredientsTitle);


  const ingredients = document.createElement("ul");

  // Loop through recipe ingredients and create list items
  recipes[recipeId - 1].ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.innerText = ingredient;
    ingredients.appendChild(ingredientItem);
  });

  detailsContainer.appendChild(ingredients);

  // Create recipe instructions element
  const instructionsTitle = document.createElement("h2");
  instructionsTitle.innerText = "Instructions:";
  detailsContainer.appendChild(instructionsTitle);

  const instructions = document.createElement("ol");

  // Loop through recipe instructions and create list items
  recipes[recipeId - 1].instructions.forEach((instruction) => {
    const instructionItem = document.createElement("li");
    instructionItem.innerText = instruction;
    instructions.appendChild(instructionItem);
  });

  detailsContainer.appendChild(instructions);

  contentContainer.appendChild(detailsContainer);
}

let currentIndex = 0;

function renderComments(comments) {
  const comment = document.createElement("h2");
  comment.innerText = "Comments:";
  contentContainer.appendChild(comment);

  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  const user = document.createElement("p");
  user.classList.add("user");
  user.innerText = `${comments[currentIndex].user} (rating: ${comments[currentIndex].rating}) said:`;
  commentContainer.appendChild(user);
  
  const content = document.createElement("p");
  content.classList.add("content");
  content.innerText = `${comments[currentIndex].content}`;
  commentContainer.appendChild(content);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const nextComment = document.createElement("button");
  nextComment.classList.add("next-comment");
  nextComment.type = "button";
  nextComment.innerText = "<";

  nextComment.addEventListener("click", () => {
    currentIndex = currentIndex + 1;
    if (currentIndex >= comments.length) {
      currentIndex = 0;
    }
    user.innerText = `${comments[currentIndex].user} (rating: ${comments[currentIndex].rating}) said:`;
    content.innerText = `${comments[currentIndex].content}`;
  });

  const previousComment = document.createElement("button");
  previousComment.classList.add("previous-comment");
  previousComment.type = "button";
  previousComment.innerText = ">";

  previousComment.addEventListener("click", () => {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
      currentIndex = comments.length - 1;
    }
    user.innerText = `${comments[currentIndex].user} (rating: ${comments[currentIndex].rating}) said:`;
    content.innerText = `${comments[currentIndex].content}`;
  });

  buttonContainer.appendChild(previousComment);
  buttonContainer.appendChild(nextComment);
  commentContainer.appendChild(buttonContainer);

  contentContainer.appendChild(commentContainer);

  console.log(currentIndex);
}

// Call the renderRecipe function with the recipes array
renderRecipe(recipes);
renderComments(recipes[recipeId - 1].comments);



