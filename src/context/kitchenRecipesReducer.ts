import { IKitchenRecipe, IKitchenRecipeState } from '../interfaces/interfaces';
import { useEffect } from 'react';

export type ProjectAction =
  | { type: "GET_KITCHEN_RECIPE"; payload: IKitchenRecipe}
  | { type: "ADD_KITCHEN_RECIPE"; payload: IKitchenRecipe }
  | { type: "UPDATE_KITCHEN_RECIPE"; payload: IKitchenRecipe }
  | { type: "DELETE_KITCHEN_RECIPE"; payload: string };






export function kitchenReducer(state: IKitchenRecipeState, action: ProjectAction) : IKitchenRecipeState {
  switch (action.type) {
    case "GET_KITCHEN_RECIPE":
      return {
        ...state,
        kitchenRecipeSelect: action.payload
      };
    case "ADD_KITCHEN_RECIPE":
      return {
        ...state,
        kitchenRecipesList: [...state.kitchenRecipesList, action.payload]
      };
    case "UPDATE_KITCHEN_RECIPE": {
      const newKR = state.kitchenRecipesList.map((kitchenRecipe) => {
        if (kitchenRecipe.id === action.payload.id) {
          return action.payload;
        }
        return kitchenRecipe;
      });
      return {
        ...state,
        kitchenRecipesList: newKR,
      };
    }
    case "DELETE_KITCHEN_RECIPE": {
      return {
        ...state,
        kitchenRecipesList: state.kitchenRecipesList.filter((kitchenRecipe) => kitchenRecipe.id !== action.payload),
      };
    } 
    default:
      return state;
  }
}