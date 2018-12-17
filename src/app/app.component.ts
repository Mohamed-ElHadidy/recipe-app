import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'recipe-app';
  InputValue = '';
  recipeArray = [];
  recipe = [];
  A;
  B = [];
  constructor(private dataService: DataService) {
  }
  fire() {
    this.dataService.getRecipesData(this.InputValue)
      .subscribe(data => this.recipe = Object.entries(data));
    if (this.recipe.length !== 0) {
      this.recipe.slice(6).map(d => this.B = d[1]);
    }
    console.log(this.recipe);
    // console.log( this.recipeArray);
    console.log(this.A);
    console.log(this.B);
  }
}
