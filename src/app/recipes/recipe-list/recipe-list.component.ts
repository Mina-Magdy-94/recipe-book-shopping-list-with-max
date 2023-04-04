import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes:Recipe[]=[
  new Recipe('Test',"lorem ipsum",'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/Steak-with-sweet-potato-salad-77bd2cd.jpg')
]
}
