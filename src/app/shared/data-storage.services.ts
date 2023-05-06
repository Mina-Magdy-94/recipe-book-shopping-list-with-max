import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const allRecipes = this.recipeService.getAllRecipes()
    this.http.put('https://recipe-book-c29c1-default-rtdb.firebaseio.com/recipes.json', allRecipes)
      .subscribe()
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipe-book-c29c1-default-rtdb.firebaseio.com/recipes.json')
      .pipe(map(
        recipes => recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        })
      ), tap(
        response => this.recipeService.setRecipes(response)
      )
      )
  }

}
