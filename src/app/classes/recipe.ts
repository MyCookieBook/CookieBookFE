import { Category } from '../classes/category';

export class Recipe {

  private _id: Number;
  private _category: string;
  private _subcategory: string;
  private _title: string;
  private _author: string;
  private _duration: Number;
  private _nutritional: string;
  private _difficulty: Number;
  private _ingredient: Array<string>;
  private _material: Array<string>;
  private _step: Array<string>;
  private _picture: string;
  private _link: string;
  private _other: string;

  public Recipe() {};

  public get id() {
    return this._id;
  }

  public getCategoryFE() {
    var cat = new Category();
    return cat.getCategoryFE(this._category, this._subcategory);
  }

  public setCategoryFE(category: string) {
    var cat = new Category();
    cat.setCategoryBE(category);
    this._category = cat.getCategory();
    this._subcategory = cat.getSubcategory();
  }

  public get category() {
    return this._category;
  }

  public get subcategory() {
    return this._subcategory;
  }

  public get title() {
   return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get author() {
    return this._author;
  }

  public set author(author: string) {
    this._author = author;
  }

  public get duration() {
    return this._duration;
  }

  public set duration(duration: Number) {
    this._duration = duration;
  }

  public get nutritional() {
    return this._nutritional;
  }

  public set nutritional(nutritional: string) {
    this._nutritional = nutritional;
  }

  public get difficulty() {
    return this._difficulty;
  }

  public set difficulty(difficulty: Number) {
    this._difficulty = difficulty;
  }

  public get ingredient() {
    return this._ingredient;
  }

  public set ingredient(ingredient: Array<string>) {
    this._ingredient = ingredient;
  }

  public addIngredient(ingredient: string, index: number) {
    if(index === -1) {
      this._ingredient.push(ingredient);
    } else {
      this._ingredient[index] = ingredient;
    }
  }

  public get material() {
    return this._material;
  }

  public set material(material: Array<string>) {
    this._material = material;
  }

  public get step() {
    return this._step;
  }

  public set step(step: Array<string>) {
    this._step = step;
  }

  public get picture() {
    return this._picture;
  }

  public set picture(picture: string) {
    this._picture = picture;
  }

  public get link() {
    return this._link;
  }

  public set link(link:string) {
    this._link = link;
  }

  public get other() {
    return this._other;
  }

  public set other(other: string) {
    this._other = other;
  }

  public copy(r: Recipe) {
    this._category = r.category;
    this._subcategory = r.subcategory;
    this._title = r.title;
    this._author = r.author;
    this._duration = r.duration;
    this._nutritional = r.nutritional;
    this._difficulty = r.difficulty;
    this.copyIngredient(r.ingredient);
    //this._ingredient = r.ingredient;
    this._material = r.material;
    this._step = r.step;
    this._picture = r.picture;
    this._link = r.link;
    this._other = r.other;
  }

  public copyIngredient(ingredient: Array<string>) {
    //this._ingredient = null;
    //while(this._ingredient.length > 0) {
      //this._ingredient.pop();
    //}
    //ingredient.forEach(i => this._ingredient.push(i));
    //for(var i = 0; i < ingredient.length; i++) {
    this._ingredient = ingredient.slice();
    for(var index in ingredient) {
      //this._ingredient.push(ingredient[index].);
    }
  }

}
