interface data {
  hits: any[];
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
}

interface tempRecipe {
  recipe: {
    uri: string;
    url: string;
    label: string;
    image: string;
    images: {};
    source: string;
    healthLabels: any[string];
    ingredientLines: any[string];
    ingredients: any[];
    calories: number;
    totalWeight: number;
    totalTime: number;
    cuisineType: any[];
    mealType: any[];
    totalNutrients: {};
  };
}

export const extractIdAfterHash = (uri: string) => {
  let posOfHas = uri.indexOf("#");
  let extractedId = uri.slice(posOfHas + 1);
  return extractedId;
};

export const extractRecipeData = (data: data) => {
  let tempRecipes = data.hits.map((tempRecipe: tempRecipe) => {
    return {
      id: extractIdAfterHash(tempRecipe.recipe.uri),
      name: tempRecipe.recipe.label,
      image: tempRecipe.recipe.image,
      images: tempRecipe.recipe.images,
      source: tempRecipe.recipe.source,
      source_url: tempRecipe.recipe.url,
      healthLabels: tempRecipe.recipe.healthLabels,
      ingredientLines: tempRecipe.recipe.ingredientLines,
      ingredients: tempRecipe.recipe.ingredients,
      calories: tempRecipe.recipe.calories,
      totalWeight: tempRecipe.recipe.totalWeight,
      totalTime: tempRecipe.recipe.totalTime,
      cuisineType: tempRecipe.recipe.cuisineType,
      mealType: tempRecipe.recipe.mealType,
      nutrients: tempRecipe.recipe.totalNutrients,
    };
  });

  return {
    data: tempRecipes,
    nextPage: data?._links?.next?.href,
  };
};
