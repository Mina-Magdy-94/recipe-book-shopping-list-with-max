import { Component, ViewChild, Output, EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription
  editMode: boolean = false
  editedItemIndex: number
  editedItem: Ingredient

  constructor(private shoppingListService: ShoppingListService) { }
  @ViewChild('f', { static: false }) slForm: NgForm



  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index
          this.editedItem = this.shoppingListService.getIngredientToEdit(index)
          this.editMode = true
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  addItem(form: NgForm) {
    const ingredientToPass = new Ingredient(form.value.name, form.value.amount)
    if (this.editMode) {
      let newIngredient = this.slForm.value
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(ingredientToPass)
    }
    this.slForm.reset()
    this.editMode=false
  }

  onDelete(){
    if(this.editMode){
      const nameOfItemToDelete=this.slForm.value.name
      this.shoppingListService.deleteIngredient(nameOfItemToDelete)
    }
    this.onClear()
  }

  onClear(){
    this.slForm.reset()
    this.editMode=false
  }

}
