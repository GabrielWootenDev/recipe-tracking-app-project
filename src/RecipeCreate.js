import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // initialFormState in our useState and createRecipe handler returns us back to a blank slate whenever the form is submitted.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  // the handleChange function updates our formData whenever data is changed in one of the form fields, with the target being the form that changed.
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  // When the form is submitted createRecipe added the data in our formData as a new recipe in the recipes array by creating a new array with the information from both. Then setting our formData back to the initialFormState.
  const createRecipe = (event) => {
    event.preventDefault();
    setRecipes(() => [...recipes, formData]);
    setFormData({...initialFormState});
  };

  return (
    <form name="create" onSubmit={createRecipe}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                name="name"
                onChange={handleChange}
                type="text"
                required={true}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                onChange={handleChange}
                type="text"
                required={true}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                onChange={handleChange}
                type="url"
                required={true}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                required={true}
                rows={2}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                required={true}
                rows={2}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
