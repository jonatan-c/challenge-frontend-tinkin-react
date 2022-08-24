export interface IKitchenRecipe {
    id?: string | number;
    name: string;
    reviews: number;
    cookedBefore: boolean ;
    ingredients?: string[];
    preparation: string;
}

export interface IKitchenRecipeState {

    kitchenRecipesList: IKitchenRecipe[] 
    kitchenRecipeSelect: IKitchenRecipe
}

export interface props {
    children: JSX.Element | JSX.Element[]
  }
  

  export type KitchenRecipesContexProp = {
    kitchenRecipesList: IKitchenRecipe[];
    addKitchenRecipe:  (kitchen: IKitchenRecipe) => void;
    updateKitchenRecipe: (kitchen: IKitchenRecipe) => void;
    deleteKitchenRecipe: (id: string) => void;
    getKitchenRecipe: (kitchen: IKitchenRecipe) => void;
    kitchenRecipeSelect: IKitchenRecipe;
}