import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes , deleteRecipe } ) {
  
  //This is our table structure, passing in the recipe view component with the .map method to create each row for ewach recipe
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeView
              deleteRecipe={deleteRecipe}
              recipeData={recipe}
              key={index}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
