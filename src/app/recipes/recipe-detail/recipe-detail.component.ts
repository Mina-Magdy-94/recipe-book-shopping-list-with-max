import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import {ActivatedRoute,Params,Router} from '@angular/router'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe:Recipe
  id:number
  constructor(private recipeService:RecipeService,private activatedRoute:ActivatedRoute,private  router:Router){}


  ngOnInit() {
    this.activatedRoute.params.
    subscribe(
      (params:Params)=>{
        this.id=+params['id']
        this.recipe=this.recipeService.getrecipe(this.id)
      }
    )
  }


  editRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute})
  }

  addToShoppingList(ingredientsToAdd:Ingredient[]){
    this.recipeService.toShoppingList(ingredientsToAdd)
  }


  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'])
  }
}
