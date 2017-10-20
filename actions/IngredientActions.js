/*
action types
*/

export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'


/*
action creators
*/

export function updateIngredients(text) {
    return {
      type: UPDATE_INGREDIENTS,
      text
    }
  }