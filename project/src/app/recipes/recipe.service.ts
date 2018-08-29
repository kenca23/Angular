import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe(
      "A Test Recipe 2",
      "This is simply a test 2",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]
    ),
  ];

  constructor( private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice(); //Makes a copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[] ){
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number): Recipe{
    return this.recipes[id];
  }



}
