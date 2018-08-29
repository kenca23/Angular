import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 15),
  ];

  addIngredient(ingInfo: Ingredient){
    this.ingredients.push(ingInfo);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice(); //Makes a copy of the array
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients); //... makes an array to a list
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
