import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageToDisplay:string='recipes'
navigate(page:string){
  this.pageToDisplay=page
}
}
