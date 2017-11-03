/*
action types
*/

const UPDATE_RECIPES = 'UPDATE_RECIPES'


/*
action creators
*/

export const updateRecipes = recipes => {
    return {
      type: UPDATE_RECIPES,
      recipes
    }
}