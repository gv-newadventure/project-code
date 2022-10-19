import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/model/ingredient.model";

export class ShoppingListService {

  onIngredientAddedEvent = new EventEmitter<void>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.onIngredientAddedEvent.emit();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientAddedEvent.emit();
  }
}
