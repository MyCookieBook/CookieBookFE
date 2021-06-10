export class Category {

  private category: string;
  private subcategory: string;
  private categoryFE: string;

  public Category() {};

  public getCategoryFE(category: string, subcategory: string) {
    this.categoryFE = "";

    switch (category) {
      case "APPETIZER":
        this.categoryFE += "Appetizer";
        break;
      case "MAINDISH":
        this.categoryFE += "MainDish";
        break;
      case "DESSERT":
        this.categoryFE += "Dessert";
        break;
      case "DRINKS":
        this.categoryFE += "Drinks";
        break;
      case "BASICS":
        this.categoryFE += "BasicRecipes";
        break;
      case "OTHER":
        this.categoryFE += "Other";
        break;
      default:
        break;
    }

    switch (subcategory) {
      case "APP_SALAD":
        this.categoryFE += "/Salad";
        break;
      case "APP_SOUP":
        this.categoryFE += "/Soup";
        break;
      case "MORSEL":
        this.categoryFE += "/Morsel";
        break;
      case "MAIN_SALAD":
        this.categoryFE += "/Salad";
        break;
      case "MAIN_SOUP":
        this.categoryFE += "/Soup";
        break;
      case "MEAT":
        this.categoryFE += "/Meat";
        break;
      case "FISH":
        this.categoryFE += "/Fish";
        break;
      case "VEGAN":
        this.categoryFE += "/Vegan";
        break;
      case "VEGETARIAN":
        this.categoryFE += "/Vegetarian";
        break;
      case "CASSEROLE":
        this.categoryFE += "/Casserole";
        break;
      case "SIDEDISHES":
        this.categoryFE += "/SideDishes";
        break;
      case "DOUGH":
        this.categoryFE += "/Dough";
        break;
      case "PASTERIES":
        this.categoryFE += "/Pastries";
        break;
      case "COLDDISHES":
        this.categoryFE += "/COldDishes";
        break;
      case "FRUITSALAD":
        this.categoryFE += "/FruitSalad";
        break;
      default:
        break;
    }

    return this.categoryFE;
  }

  public getCategory() {
    return this.category;
  }

  public getSubcategory() {
    return this.subcategory;
  }

  public setCategoryBE(category: string) {
    if(category.includes("Appetizer")) {
      this.category = "APPETIZER";
    } else if (category.includes("MainDish")) {
      this.category = "MAINDISH";
    } else if (category.includes("Dessert")) {
      this.category = "DESSERT";
    } else if (category.includes("Drinks")) {
      this.category = "DRINKS";
    } else if (category.includes("BasicRecipes")) {
      this.category = "BASICS";
    } else {
      this.category = "OTHER";
    }

    if (category.includes("Morsel")) {
      this.subcategory = "MORSEL";
    } else if (category.includes("Meat")) {
      this.subcategory = "MEAT";
    } else if (category.includes("Fish")) {
      this.subcategory = "FISH";
    } else if (category.includes("Vegan")) {
      this.subcategory = "VEGAN";
    } else if (category.includes("Vegetarian")) {
      this.subcategory = "VEGETARIAN";
    } else if (category.includes("Casserole")) {
      this.subcategory = "CASSEROLE";
    } else if (category.includes("SideDishes")) {
      this.subcategory = "SIDEDISHES";
    } else if (category.includes("Dough")) {
      this.subcategory = "DOUGH";
    } else if (category.includes("Pastries")) {
      this.subcategory = "PASTERIES";
    } else if (category.includes("ColdDishes")) {
      this.subcategory = "COLDDISHES";
    } else if (category.includes("FruitSalad")) {
      this.subcategory = "FRUITSALAD";
    } else if (category.includes("Salad")) {
      if(this.category === "APPETIZER") {
        this.subcategory = "APP_SALAD";
      } else if (this.category === "MainDish") {
        this.subcategory = "MAIN_SALAD";
      }
    } else if (category.includes("Soup")) {
      if(this.category === "APPETIZER") {
        this.subcategory = "APP_SOUP";
      } else if (this.category === "MAINDISH") {
        this.subcategory = "MAIN_SOUP";
      }
    } else {
      this.subcategory = "DEFAULT";
    }
  }

}
