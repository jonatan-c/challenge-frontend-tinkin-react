import React, { createContext, useReducer } from "react";
import { v4 } from "uuid";

import {
  IKitchenRecipe,
  KitchenRecipesContexProp,
  IKitchenRecipeState,
  props,
} from "../interfaces/interfaces";
import { kitchenReducer } from "./kitchenRecipesReducer";

const initialState: IKitchenRecipeState = {
  kitchenRecipesList: JSON.parse(
    localStorage.getItem("kitchenRecipeLocalStorage") || "[]"
  ),
  kitchenRecipeSelect: JSON.parse(
    localStorage.getItem("kitchenRecipeSelectLocalStorage") || "[]"
  ),
};

export const KitchenRecipesGlobalContext =
  createContext<KitchenRecipesContexProp>({} as KitchenRecipesContexProp);

export const KitchenRecipesGlobalProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(kitchenReducer, initialState);

  const getKitchenRecipe = (kitchen: IKitchenRecipe) => {
    dispatch({
      type: "GET_KITCHEN_RECIPE",
      payload: kitchen,
    });
  }

  const addKitchenRecipe = (kitchen: IKitchenRecipe): void => {
    dispatch({
      type: "ADD_KITCHEN_RECIPE",
      payload: { ...kitchen, id: v4() },
    });
  };

  function updateKitchenRecipe(kitchen: IKitchenRecipe): void {
    dispatch({
      type: "UPDATE_KITCHEN_RECIPE",
      payload: kitchen,
    });
  }

  function deleteKitchenRecipe(id: string): void {
    dispatch({
      type: "DELETE_KITCHEN_RECIPE",
      payload: id,
    });
  }

  return (
    <KitchenRecipesGlobalContext.Provider
      value={{
        kitchenRecipesList: state.kitchenRecipesList,
        addKitchenRecipe,
        updateKitchenRecipe,
        deleteKitchenRecipe,
        getKitchenRecipe,
        kitchenRecipeSelect: state.kitchenRecipeSelect,
      }}
    >
      {children}
    </KitchenRecipesGlobalContext.Provider>
  );
};
