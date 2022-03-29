import React from "react";

function RecipeView({ recipeData, deleteRecipe, index }) {
  const { name, cuisine, photo, ingredients, preparation } = recipeData;
  //This returns us the basic structure of a row of our table filled in with the appropriate information from the props.
  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        <img src={photo} alt=""></img>
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
