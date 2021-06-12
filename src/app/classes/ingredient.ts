export class Ingredient {
  private id: Number;
  private ingredientName: string;

  constructor(id: Number, ingredientName: string ){
    if(id === null) {
      this.id = 0;
    } else {
      this.id = id;
    }
    this.ingredientName = ingredientName;
  }
  public getId() {
    return this.id;
  }

  public getIngredientName() {
    return this.ingredientName;
  }

  public setIngredientName(ingredientName:string) {
    this.ingredientName = ingredientName;
  }
}
