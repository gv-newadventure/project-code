import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/model/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Biriyani', 'A very tasty indian food', 'https://www.functionfoods.co.za/wp-content/uploads/2020/06/South-Indian-chicken-biryani.jpeg', [

      new Ingredient('Meat', 1),
      new Ingredient('Rice', 2)

    ]),
    new Recipe('Sample', 'Sample food', 'https://www.functionfoods.co.za/wp-content/uploads/2020/06/South-Indian-chicken-biryani.jpeg', [

      new Ingredient('Sample 1', 1),
      new Ingredient('Sample X', 4)
    ])
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.shoppingListService.addIngredients(ingredients);
  }

}
