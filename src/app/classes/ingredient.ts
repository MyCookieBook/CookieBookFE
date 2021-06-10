export class Ingredient {
  private _id: Number;
  private _ingredientName: string;

  constructor(id: Number, ingredientName: string ){
    if(id === null) {
      this._id = 0;
    } else {
      this._id = id;
    }
    this._ingredientName = ingredientName;
  }
  public get id() {
    return this._id;
  }

  public get ingredientName() {
    return this._ingredientName;
  }

  public set ingredientName(ingredientName:string) {
    this._ingredientName = ingredientName;
  }
}
