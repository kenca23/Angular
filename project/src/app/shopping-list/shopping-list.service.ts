import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 15),
  ];

  addIngredient(ingInfo: Ingredient){
    this.ingredients.push(ingInfo);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice(); //Makes a copy of the array
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients); //... makes an array to a list
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
