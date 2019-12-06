import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('f', { static: true }) recipe: NgForm;
  @Output() InputValue: any = new EventEmitter();
  inputval: string = '';
  recipeData: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.InputValue.emit(this.recipe.value.searchRecipe);
    console.log(this.recipe.value.searchRecipe);
    this.dataService.getRecipesData(this.inputval)
      .subscribe(data => {
        const data$ = Object.entries(data);
        data$.slice(5).map(sliced => this.recipeData = sliced[1]);
        console.log(this.recipeData);
      });
  }
}
