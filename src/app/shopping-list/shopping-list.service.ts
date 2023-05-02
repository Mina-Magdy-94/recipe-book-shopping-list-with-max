import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import {Subject} from 'rxjs'

export class ShoppingListService{
  ingredientsChanged=new Subject<Ingredient[]>()
  startEditing=new Subject<number>()

private ingredients:Ingredient[]=[
  new Ingredient('Banana',8),
  new Ingredient('Carrot',10),
  new Ingredient('Ingredient One',10),
]

getIngredients():Ingredient[]{
  return this.ingredients.slice()
}

getIngredientToEdit(index:number){
  return this.ingredients[index]
}

updateIngredient(index:number,newIngredient:Ingredient){
  this.ingredients[index]=newIngredient
  this.ingredientsChanged.next(this.ingredients.slice())
}

deleteIngredient(name:string){
  this.ingredients=this.ingredients.filter((ingredient)=>{
    return ingredient.name.toLowerCase() !==name.toLowerCase()
  })
  this.ingredientsChanged.next(this.ingredients.slice())
}

addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient)
  this.ingredientsChanged.next(this.ingredients.slice())
}

addRecipeIngredients(RecipeIngredients:Ingredient[]){
  this.ingredients.push(...RecipeIngredients)
  this.ingredientsChanged.next(this.ingredients.slice())
}

}
