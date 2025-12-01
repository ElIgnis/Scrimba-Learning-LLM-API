import React, {useEffect} from "react";
import { getRecipeFromMistral } from "../AI"
import IngredientsList from "./IngredientsList.tsx";
import GeneratedRecipe from "./GeneratedRecipe.tsx";

export default function AIChef(){

    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData : FormData ){

        const newIngredient = formData.get('ingredient');
        setIngredients([...ingredients, newIngredient]);
        console.log("submit", newIngredient);
    }

    useEffect(()=> {
        if(recipeSection.current !== null && recipe.length > 0)
        {
            recipeSection.current.scrollIntoView({behavior: "smooth"});
        }

    },[recipe]);

    async function getRecipe() {
        const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(generatedRecipeMarkdown);
    }

    return (
      <main>
          <form
              className="add-ingredient-form"
              action={addIngredient}
          >
              <input
                    type="text"
                    placeholder={'Enter Ingredient'}
                    aria-label="Add Ingredient"
                    name="ingredient"
              />
              <button>Add Ingredient</button>
          </form>

          {ingredients.length > 0 &&
              <IngredientsList
                  ingredients={ingredients}
                  getRecipe={getRecipe}
              />
          }
          { recipe && <GeneratedRecipe recipe={recipe} ref={recipeSection}/> }
      </main>
    );
}