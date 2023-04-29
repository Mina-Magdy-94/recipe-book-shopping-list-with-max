import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  selectedRecipe=new EventEmitter<Recipe>()

  constructor(private shoppingListService:ShoppingListService){}

  private recipes:Recipe[]=[
    new Recipe('Recipe 1',"Tasty",'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/Steak-with-sweet-potato-salad-77bd2cd.jpg',[new Ingredient('Ingredient One',2),new Ingredient('Ingredient Two',7),new Ingredient('Ingredient Three',4)]),
    new Recipe('Recipe 2',"Juicy",'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/Steak-with-sweet-potato-salad-77bd2cd.jpg',[new Ingredient('Ingredient Four',2),new Ingredient('Ingredient Five',7),new Ingredient('Ingredient six',4)])
  ]

  getAllRecipes():Recipe[]{
    return this.recipes.slice()
  }

  getrecipe(id:number):Recipe{
    return this.recipes[id]
  }

  toShoppingList(ingredients:Ingredient[]){
    let ingredientNamesFoundInShopiingList=this.shoppingListService.getIngredients().map((el)=>el.name)
    let filteredIngredients:Ingredient[]=[]
    for(let i=0 ;i<ingredients.length;i++){
      if(ingredientNamesFoundInShopiingList.includes(ingredients[i].name)){
        let foundIngredient=this.shoppingListService.getIngredients().find((el)=>el.name===ingredients[i].name)
        foundIngredient.amount+=ingredients[i].amount
      }else{
        filteredIngredients.push(ingredients[i])
      }
    }
    if(filteredIngredients.length){
      console.log(filteredIngredients)
      this.shoppingListService.addRecipeIngredients(filteredIngredients)
    }

  }
}
