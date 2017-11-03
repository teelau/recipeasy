/*
action types
*/

const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'


/*
action creators
*/

export const updateIngredients = text => {
    return {
      type: UPDATE_INGREDIENTS,
      text
    }
}