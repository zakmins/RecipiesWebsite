import recettesDB from "./recettesDB.js";

// Retrieve all recipes from the database
const recipes = recettesDB;

// Display all recipes on the page
const recipeList = document.querySelector(".recipes-list");

//create getRating function

function getRating(comments) {
  let sum = 0
  comments.forEach((comment) => {
    sum = sum + comment.rating
  })
  return sum/comments.length;
}

function renderRecipesList(recipes, searchQuery = "") {

  recipes.forEach((recipe) => {
  // Create recipe card
  const recipeCard = document.createElement("div");
  recipeCard.classList.add("recipe-card");
  // Create image container
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = `../assets/recettes/${recipe.id}/1.png`;
  img.alt = recipe.name;
  imgContainer.appendChild(img);
  recipeCard.appendChild(imgContainer);

  // Create recipe info container
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  // Create recipe name element
  const name = document.createElement("h1");
  name.textContent = recipe.name;
  infoContainer.appendChild(name);

  // Create recipe category element
  const category = document.createElement("p");
  category.classList.add("category");
  category.textContent = `Category: ${recipe.category}`;
  infoContainer.appendChild(category);

  // Create recipe origin element
  const origin = document.createElement("p");
  origin.classList.add("origin");
  origin.textContent = `Origin: ${recipe.country}`;
  infoContainer.appendChild(origin);

  // Create recipe duration element
  const duration = document.createElement("p");
  duration.classList.add("duration");
  duration.textContent = `Duration: ${recipe.duration}`;
  infoContainer.appendChild(duration);

  // Create recipe rating element
  const rating = document.createElement("p");
  rating.classList.add("rating");
  rating.textContent = `Rating: ${getRating(recipe.comments)}`;
  infoContainer.appendChild(rating);

  recipeCard.appendChild(infoContainer);

  // Create details button
  const detail = document.createElement("a");
  detail.innerText = "details";
  detail.classList.add("button");
  detail.href = `../html/details.html?id=${recipe.id}`;
  infoContainer.appendChild(detail);

  recipeCard.appendChild(infoContainer);
  
  // Add recipe card to recipe list
  recipeList.appendChild(recipeCard);
  
  });
}

// Call renderRecipesList() when the page is loaded
renderRecipesList(recipes);

const searchBar = document.querySelector(".input");

searchBar.addEventListener("input", () => {
  const searchQuery = searchBar.value.trim().toLowerCase();
      // Filter recipes that match search query
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery)
      ); 

      // Remove all recipe cards from recipe list
      while (recipeList.firstChild) {
        recipeList.removeChild(recipeList.firstChild);
      }

      // Display filtered recipes on the page
      renderRecipesList(filteredRecipes);
      
      if (filteredRecipes.length === 0) {
        const error = document.createElement("h2");
        error.textContent = "No recipe found"
        recipeList.appendChild(error)
      }
});
