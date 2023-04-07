import { Component , ViewChild ,Output , EventEmitter, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild("nameInput",{static:false}) nameInput:ElementRef
@ViewChild("amountInput",{static:false}) amountInput:ElementRef

constructor(private shoppingListService:ShoppingListService){}

addIngredient(){
  const ingredientName:string=this.nameInput.nativeElement.value
  const ingredientAmount=this.amountInput.nativeElement.value
  const ingredientToPass=new Ingredient(ingredientName,ingredientAmount)
this.shoppingListService.addIngredient(ingredientToPass)
}
}
