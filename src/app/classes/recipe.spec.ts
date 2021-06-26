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
});
