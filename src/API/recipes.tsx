const RECIPE_API_URL = "https://restapi.fr/api/tagt_recipes";

// Récupérer les recettes par lot de 18
export async function getRecipes(queryParams = "") {
  const response = await fetch(`${RECIPE_API_URL}/?${queryParams}`);

  if (response.ok) {
    const body = await response.json();
    return Array.isArray(body) ? body : [body];
  } else {
    throw new Error("Fetching failed");
  }
}

// Récupérer une recette
export async function getRecipe(_id) {
  const response = await fetch(`${RECIPE_API_URL}/${_id}`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Fetching failed");
  }
}

// Créer une recette
export async function createRecipe(newRecipe) {
  const response = await fetch(RECIPE_API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newRecipe),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Fetching failed");
  }
}

// Modifier une recette
export async function updateRecipe(recipeToUpdate) {
  const { _id, ...RecipeWithoutId } = recipeToUpdate;

  const response = await fetch(`${RECIPE_API_URL}/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(RecipeWithoutId),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Fetching failed");
  }
}

// Supprimer une recette
export async function deleteRecipe(_id) {
  const response = await fetch(`${RECIPE_API_URL}/${_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    return _id;
  } else {
    throw new Error("Fetching failed");
  }
}
