import React from "react";

function RecipeView({ recipeData }, { deleteRecipe }) {
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
        <button name="edit" /*onClick={editRecipe}*/>Edit</button>
        <br />
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
