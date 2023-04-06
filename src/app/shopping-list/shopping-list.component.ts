import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients:Ingredient[]=[
  new Ingredient('Banana',8),
  new Ingredient('Carrot',10),
]

addTheIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient)
}

}
