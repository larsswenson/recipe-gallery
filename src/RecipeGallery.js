import React from 'react';

// Define recipe array
const RecipeGallery = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Spaghetti", "Parmesano Reggiano", "Egg", "Pancetta", "Garlic", "Olive Oil", "Black Pepper"],
      image: "https://example.com/carbonara.jpg"
    },
    {
      id: 2,
      title: "Lentil Soup",
      ingredients: ["Lentils", "Chicken Broth", "Diced Tomatoes", "Onion", "Garlic", "Celery", "Carrot", "Olive Oil"],
      image: "https://example.com/lentil-soup.jpg"
    },
    {
      id: 3,
      title: "Crepes",
      ingredients: ["Flour", "Egg", "Milk", "Butter", "Lemon Zest"],
      image: "https://example.com/crepes.jpg"
    },

  ];
// Map over array & render card for each recipe
  return (
    <div className="recipe-gallery">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
};

export default RecipeGallery;
