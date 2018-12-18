import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('f') recipe: NgForm;
  @Output() InputValue: any = new EventEmitter();
  inputval = '';
  recipeData: any[] = [];
  recipeFilteredData: any[] = [];
  submitted: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.InputValue.emit(this.recipe.value.searchRecipe);
    this.dataService.getRecipesData(this.inputval)
      .subscribe(data => this.recipeData = Object.entries(data));
    if (this.recipeData.length !== 0) {
      this.recipeData.slice(6).map(sliced => this.recipeFilteredData = sliced[1]);
      console.log(this.recipe.value.searchRecipe);
      console.log(this.recipeData, this.inputval);
      console.log(this.recipeFilteredData);
    }
    console.log(this.recipe.value.searchRecipe);
    console.log(this.recipeData, this.inputval);
    console.log(this.recipeFilteredData);
  }

}
