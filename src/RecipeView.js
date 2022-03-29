import React from "react";

function RecipeView( {recipeData, deleteRecipe, index}) {
  const { name, cuisine, photo, ingredients, preparation } = recipeData;

  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        <img src={photo} alt=""></img>
      </td>
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
