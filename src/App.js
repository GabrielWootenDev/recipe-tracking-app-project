import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  //the state below stores the information of all our recipes and updates when new recipes are submitted in RecipeCreate.
  const [recipes, setRecipes] = useState(RecipeData);

  //deleteRecipe will delete the recipe in the recipes array with the index that matches the one stored in the delete button that was clicked by filtering the array for every recipe whose index does not match.
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
