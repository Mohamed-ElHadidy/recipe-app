import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('f') recipe: NgForm;
  @Output() InputValue: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.InputValue.emit(this.recipe.value.searchRecipe);
    console.log(this.recipe.value.searchRecipe);
  }
}
