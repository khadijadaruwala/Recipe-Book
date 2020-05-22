import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pizza',
      'We all love pizza',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
      [new Ingredient('Tomato', 2),
      new Ingredient('Onion', 2),
      new Ingredient('Capsicum', 2),
      new Ingredient('Cheese', 1)]),
    new Recipe('Burger',
      'Burgers be the best',
      'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg',
      [new Ingredient('Bread buns', 6),
      new Ingredient('Lettuce', 4),
      new Ingredient('Patty', 2),
      new Ingredient('Cheese Slice', 1)])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShopping(ingredients: Ingredient[]) {
    this.slService.addIngredientsList(ingredients)
  }
}
