import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  //   private recipes: Recipe[] = [
  //   new Recipe('Pizza',
  //     'We all love pizza',
  //     'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
  //     [new Ingredient('Tomato', 2),
  //     new Ingredient('Onion', 2),
  //     new Ingredient('Capsicum', 2),
  //     new Ingredient('Cheese', 1)]),
  //   new Recipe('Burger',
  //     'Burgers be the best',
  //     'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg',
  //     [new Ingredient('Bread buns', 6),
  //     new Ingredient('Lettuce', 4),
  //     new Ingredient('Patty', 2),
  //     new Ingredient('Cheese Slice', 1)])
  // ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShopping(ingredients: Ingredient[]) {
    this.slService.addIngredientsList(ingredients)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
