import {Category} from '../classes/category';
import {Material} from "./material";
import {Ingredient} from "./ingredient";
import {Step} from "./step";
import {of} from "rxjs";

export class Recipe {

  private _id: Number;
  private _author: string;
  private _title: string;
  private _duration: Number;
  private _difficulty: Number;
  private _category: string;
  private _subcategory: string;
  // private _picture: string;
  private _link: string;
  private _nutritional: string;
  private _bookmark: boolean;
  private _ingredient: Array<Ingredient>;
  private _material: Array<Material>;
  private _step: Array<Step>;
  private _other: string;

  public Recipe() {
  };

  public get id() {
    return this._id;
  }

  public set id (id: Number){
    if(id === null) {
      this._id = 0;
    } else {
      this._id = id;
    }

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

  public get bookmark() {
    return this._bookmark;
  }

  public set bookmark(bookmark: boolean) {
    this._bookmark = bookmark;
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

  public set ingredient(ingredient: Array<Ingredient>) {
    this._ingredient = ingredient;
  }

  public getIngredient() {
    var ingredients = [];
    this._ingredient.forEach((value) => {
      ingredients.push(value.ingredientName);
      console.log(value);
    });
    return ingredients;
  }

  public setIngredient(ingredient: Array<string>) {
    // löschen this._ingredient
    this._ingredient = [];
    ingredient.forEach((value) => {
      this._ingredient.push(new Ingredient(null, value))
    })
  }

  public addIngredient(ingredient: string, index: number) {
    if (index === -1) {
      this._ingredient.push(new Ingredient(null, ingredient));
    } else {
      this._ingredient[index] = new Ingredient(null, ingredient);
    }
  }

  public deleteIngredient(index: number) {
    if (index === 0) {
      if (this._ingredient.length === 1) {
        this._ingredient = [];
        this._ingredient.push(new Ingredient(null, ""));
      } else {
        this._ingredient.shift();
      }
    } else {
      this._ingredient.splice(index, 1);
    }
  }

  public get material() {
    return this._material;
  }

  public set material(material: Array<Material>) {
    this._material = material;
  }

  public getMaterial() {
    var materials = [];
    this._material.forEach((value) => {
      materials.push(value.materialName);
      console.log(value);
    });
    return materials;
  }

  public setMaterial(material: Array<string>) {
    this._material = [];
    material.forEach((value) => {
      this._material.push(new Material(null, value))
    })
  }

  public addMaterial(material: string, index: number) {
    if (index === -1) {
      this._material.push(new Material(null, material));
    } else {
      this._material[index] = new Material(null, material);
    }
  }

  public deleteMaterial(index: number) {
    if (index === 0) {
      if (this._material.length === 1) {
        this._material = [];
        this._material.push(new Material(null, ""));
      } else {
        this._material.shift();
      }
    } else {
      this._material.splice(index, 1);
    }
  }

  public get step() {
    return this._step;
  }

  public set step(step: Array<Step>) {
    this._step = step;
  }

  public getStep() {
    var steps = [];
    this._step.forEach((value) => {
      steps.push(value.stepName);
      console.log(value);
    });
    return steps;
  }

  public setStep(step: Array<string>) {
    this._step = [];
    step.forEach((value) => {
      this._step.push(new Step(null, value))
    })
  }

  public addStep(step: string, index: number) {
    if (index === -1) {
      this._step.push(new Step(null, step));
    } else {
      this._step[index] = new Step(null, step);
    }
  }

  public deleteStep(index: number) {
    if (index === 0) {
      if (this._step.length === 1) {
        this._step = [];
        this._step.push(new Step(null, ""));
      } else {
        this._step.shift();
      }
    } else {
      this._step.splice(index,1);
    }
  }

  //
  // public get picture() {
  //   return this._picture;
  // }
  //
  // public set picture(picture: string) {
  //   this._picture = picture;
  // }

  public get link() {
    return this._link;
  }

  public set link(link: string) {
    this._link = link;
  }

  public get other() {
    return this._other;
  }

  public set other(other: string) {
    this._other = other;
  }

  public copy(r: Recipe) {
    this._id = r.id;
    this._category = r.category;
    this._subcategory = r.subcategory;
    this._title = r.title;
    this._author = r.author;
    this._bookmark = r.bookmark;
    this._duration = r.duration;
    this._nutritional = r.nutritional;
    this._difficulty = r.difficulty;
    this._ingredient = r.ingredient.slice();
    this._material = r.material.slice();
    this._step = r.step.slice();
    // this._picture = r.picture;
    this._link = r.link;
    this._other = r.other;
  }

}
