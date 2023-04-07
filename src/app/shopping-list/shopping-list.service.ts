import { ElementRef, EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged=new EventEmitter<Ingredient[]>()

private ingredients:Ingredient[]=[
  new Ingredient('Banana',8),
  new Ingredient('Carrot',10),
  new Ingredient('Ingredient One',10),
]

getIngredients():Ingredient[]{
  return this.ingredients.slice()
}

addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient)
  this.ingredientsChanged.emit(this.ingredients.slice())
}

addRecipeIngredients(RecipeIngredients:Ingredient[]){
  this.ingredients.push(...RecipeIngredients)
  this.ingredientsChanged.emit(this.ingredients.slice())
}

}
