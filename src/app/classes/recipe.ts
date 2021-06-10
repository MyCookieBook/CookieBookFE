import {Category} from '../classes/category';
import {Material} from "./material";
import {Ingredient} from "./ingredient";
import {Step} from "./step";
import {of} from "rxjs";

export class Recipe {

  //private userId: Number;
  private id: Number;
  private category: string;
  private subcategory: string;
  private title: string;
  private author: string;
  private bookmark: boolean;
  private duration: Number;
  private calory: string;
  private difficultyLevel: Number;
  private ingredients: Array<Ingredient>;
  private material: Array<Material>;
  private steps: Array<Step>;
  // private _picture: string;
  private link: string;
  private other: string; //other

  public Recipe() {
  };

  public getId() {
    return this.id;
  }

  public setId (id: Number){
    if(id === null) {
      this.id = 0;
    } else {
      this.id = id;
    }

  }

  public getCategoryFE() {
    var cat = new Category();
    return cat.getCategoryFE(this.category, this.subcategory);
  }

  public setCategoryFE(category: string) {
    var cat = new Category();
    cat.setCategoryBE(category);
    this.category = cat.getCategory();
    this.subcategory = cat.getSubcategory();
  }

  public getCategory() {
    return this.category;
  }

  public getSubcategory() {
    return this.subcategory;
  }

  public getTitle() {
    return this.title;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public getAuthor() {
    return this.author;
  }

  public setAuthor(author: string) {
    this.author = author;
  }

  public getBookmark() {
    return this.bookmark;
  }

  public setBookmark(bookmark: boolean) {
    this.bookmark = bookmark;
  }

  public getDuration() {
    return this.duration;
  }

  public setDuration(duration: Number) {
    this.duration = duration;
  }

  public getCalory() {
    return this.calory;
  }

  public setCalory(calory: string) {
    this.calory = calory;
  }

  public getDifficulty() {
    return this.difficultyLevel;
  }

  public setDifficulty(difficulty: Number) {
    this.difficultyLevel = difficulty;
  }

  public getIngredientBE() {
    return this.ingredients;
  }

  public setIngredientBE(ingredient: Array<Ingredient>) {
    this.ingredients = ingredient;
  }

  public getIngredient() {
    var ingredients = [];
    this.ingredients.forEach((value) => {
      ingredients.push(value.ingredientName);
      console.log(value);
    });
    return ingredients;
  }

  public setIngredient(ingredient: Array<string>) {
    // löschen this.ingredients
    this.ingredients = [];
    ingredient.forEach((value) => {
      this.ingredients.push(new Ingredient(null, value))
    })
  }

  public addIngredient(ingredient: string, index: number) {
    if (index === -1) {
      this.ingredients.push(new Ingredient(null, ingredient));
    } else {
      this.ingredients[index] = new Ingredient(null, ingredient);
    }
  }

  public deleteIngredient(index: number) {
    if (index === 0) {
      if (this.ingredients.length === 1) {
        this.ingredients = [];
        this.ingredients.push(new Ingredient(null, ""));
      } else {
        this.ingredients.shift();
      }
    } else {
      this.ingredients.splice(index, 1);
    }
  }

  public getMaterialBE() {
    return this.material;
  }

  public setMaterialBE(material: Array<Material>) {
    this.material = material;
  }

  public getMaterial() {
    var materials = [];
    this.material.forEach((value) => {
      materials.push(value.materialName);
      console.log(value);
    });
    return materials;
  }

  public setMaterial(material: Array<string>) {
    this.material = [];
    material.forEach((value) => {
      this.material.push(new Material(null, value))
    })
  }

  public addMaterial(material: string, index: number) {
    if (index === -1) {
      this.material.push(new Material(null, material));
    } else {
      this.material[index] = new Material(null, material);
    }
  }

  public deleteMaterial(index: number) {
    if (index === 0) {
      if (this.material.length === 1) {
        this.material = [];
        this.material.push(new Material(null, ""));
      } else {
        this.material.shift();
      }
    } else {
      this.material.splice(index, 1);
    }
  }

  public getStepBE() {
    return this.steps;
  }

  public setStepBE(step: Array<Step>) {
    this.steps = step;
  }

  public getStep() {
    var steps = [];
    this.steps.forEach((value) => {
      steps.push(value.stepName);
      console.log(value);
    });
    return steps;
  }

  public setStep(step: Array<string>) {
    this.steps = [];
    step.forEach((value) => {
      this.steps.push(new Step(null, value))
    })
  }

  public addStep(step: string, index: number) {
    if (index === -1) {
      this.steps.push(new Step(null, step));
    } else {
      this.steps[index] = new Step(null, step);
    }
  }

  public deleteStep(index: number) {
    if (index === 0) {
      if (this.steps.length === 1) {
        this.steps = [];
        this.steps.push(new Step(null, ""));
      } else {
        this.steps.shift();
      }
    } else {
      this.steps.splice(index,1);
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

  public getLink() {
    return this.link;
  }

  public setLink(link: string) {
    this.link = link;
  }

  public getOther() {
    return this.other;
  }

  public setOther(other: string) {
    this.other = other;
  }

  public copy(r: Recipe) {
    this.id = r.getId();
    this.category = r.getCategory();
    this.subcategory = r.getSubcategory();
    this.title = r.getTitle();
    this.author = r.getAuthor();
    this.bookmark = r.getBookmark();
    this.duration = r.getDuration();
    this.calory = r.getCalory();
    this.difficultyLevel = r.getDifficulty();
    this.ingredients = r.getIngredientBE().slice();
    this.material = r.getMaterialBE().slice();
    this.steps = r.getStepBE().slice();
    // this._picture = r.picture;
    this.link = r.getLink();
    this.other = r.getOther();
  }

}
