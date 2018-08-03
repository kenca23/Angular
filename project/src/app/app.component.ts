import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRecipe: string = 'recipe';

  onChangePage(cpData: string) {
    this.isRecipe = cpData;

  }

}
