import {Component, EventEmitter, Output} from '@angular/core'
@Component({
selector:'app-header',
templateUrl:'./header.component.html',
styleUrls:['./header.component.css']
})

export class HeaderComponent{
  collapsed = true
  @Output() navigatePages=new EventEmitter<string>()

  onSelect(selectedLink:string){
    this.navigatePages.emit(selectedLink)
  }
}
