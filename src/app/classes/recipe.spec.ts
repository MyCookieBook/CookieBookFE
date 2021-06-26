import { Recipe } from './recipe';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new Recipe()).toBeTruthy();
  });
  it('should set id', () => {
    let recipe = new Recipe();
    recipe.setId(5);
    expect(recipe.getId()).toEqual(5);
  });
  it('should output an empty Recipe string', () => {
	let recipe = new Recipe();
	expect(recipe.getRecipe()).toEqual("§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&undefined&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§");
  });
  it('should set an empty recipe', () => {
  let recipe = new Recipe();
  recipe.setRecipe("§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§&&&§§§")
    expect(recipe.getId()).toEqual(0);
    expect(recipe.getCategory()).toEqual('OTHER');
    expect(recipe.getSubcategory()).toEqual('DEFAULT');
    expect(recipe.getTitle()).toEqual('');
    expect(recipe.getBookmark()).toEqual(false);
    expect(recipe.getAuthor()).toEqual('');
    expect(recipe.getDifficulty()).toEqual(1);
    expect(recipe.getDuration()).toEqual(0);
    expect(recipe.getCalory()).toEqual('');
    expect(recipe.getLink()).toEqual('');
    expect(recipe.getOther()).toEqual('');
    expect(recipe.getMaterial()).toEqual([]);
    expect(recipe.getIngredient()).toEqual([]);
    expect(recipe.getStep()).toEqual([]);
  });
});
