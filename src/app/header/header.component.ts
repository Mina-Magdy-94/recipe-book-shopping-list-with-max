import {Component, EventEmitter, Output} from '@angular/core'
import { DataStorageService } from '../shared/data-storage.services'
@Component({
selector:'app-header',
templateUrl:'./header.component.html',
styleUrls:['./header.component.css']
})

export class HeaderComponent{
  collapsed = true

  constructor(private dataStorageService:DataStorageService) {

  }

  saveData(){
    this.dataStorageService.storeRecipes()
  }

  fetchData(){
    this.dataStorageService.fetchRecipes().subscribe()
  }
}
