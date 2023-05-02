import { Component , OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import {ActivatedRoute,Router} from '@angular/router'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy {
recipes:Recipe[]=[]
subsciption:Subscription

constructor(private recipeService : RecipeService,private activatedRoute:ActivatedRoute,private route:Router){}

ngOnInit(): void {
  this.subsciption= this.recipeService.recipeChanged.subscribe(
    (allRecipes:Recipe[])=>this.recipes=allRecipes
  )
  this.recipes=this.recipeService.getAllRecipes()
}

ngOnDestroy(){
  this.subsciption.unsubscribe()
}

addNewRecipe(){
  this.route.navigate(['new'],{relativeTo:this.activatedRoute})
}
}
