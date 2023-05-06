import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>()

  constructor(private shoppingListService: ShoppingListService) { }

  // private recipes: Recipe[] = [
  //   new Recipe('Recipe 1', "Tasty", 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/Steak-with-sweet-potato-salad-77bd2cd.jpg', [new Ingredient('Ingredient One', 2), new Ingredient('Ingredient Two', 7), new Ingredient('Ingredient Three', 4)]),
  //   new Recipe('Recipe 2', "Juicy", 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/Steak-with-sweet-potato-salad-77bd2cd.jpg', [new Ingredient('Ingredient Four', 2), new Ingredient('Ingredient Five', 7), new Ingredient('Ingredient six', 4)])
  // ]

  private recipes:Recipe[]=[]

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipeChanged.next(this.recipes.slice())
  }

  getAllRecipes(): Recipe[] {
    return this.recipes.slice()
  }

  getrecipe(id: number): Recipe {
    return this.recipes[id]
  }


  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipeChanged.next(this.recipes.slice())
  }

  toShoppingList(ingredients: Ingredient[]) {
    let ingredientNamesFoundInShopiingList = this.shoppingListService.getIngredients().map((el) => el.name)
    let filteredIngredients: Ingredient[] = []
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredientNamesFoundInShopiingList.includes(ingredients[i].name)) {
        let foundIngredient = this.shoppingListService.getIngredients().find((el) => el.name === ingredients[i].name)
        foundIngredient.amount += ingredients[i].amount
      } else {
        filteredIngredients.push(ingredients[i])
      }
    }
    if (filteredIngredients.length) {
      this.shoppingListService.addRecipeIngredients(filteredIngredients)
    }

  }
}
