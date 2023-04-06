import { Component , ViewChild ,Output , EventEmitter, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@Output() IngredientAddition=new EventEmitter<Ingredient>()
@ViewChild("nameInput",{static:false}) nameInput:ElementRef
@ViewChild("amountInput",{static:false}) amountInput:ElementRef


addIngredient(){
  const ingredientName=this.nameInput.nativeElement.value
  const ingredientAmount=this.amountInput.nativeElement.value
  const IngredientToPass=new Ingredient(ingredientName,ingredientAmount)
  this.IngredientAddition.emit(IngredientToPass)
}
}
