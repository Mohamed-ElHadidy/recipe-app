import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Input() eachRecipe: any;
  constructor() { }

  ngOnInit() {
  }

}
