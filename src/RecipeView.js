import React from "react";

function RecipeView({ recipesData }, { deleteRecipe }) {
  const rows = recipesData.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
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
    )
  );
  return rows;
}

export default RecipeView;
