import { Box, Button, Rating, Switch, TableCell, TableRow, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { KitchenRecipesGlobalContext } from '../context/KitcheRecipesGlobalState';
import { IKitchenRecipe } from '../interfaces/interfaces';

interface props {
  recipe : IKitchenRecipe;
}

export const KitchenRecipesList = ({recipe}:any , {setKitchenRecipeForm}:any) => {

  const { kitchenRecipesList,addKitchenRecipe, deleteKitchenRecipe, getKitchenRecipe,kitchenRecipeSelect } = useContext(KitchenRecipesGlobalContext);

  
  const [value, setValue] = React.useState<number | null>(2);

  const selectOnClick = (id : any)=> {
    console.log(id);
    
    // No aplicar - No deberia tener delete
    // deleteKitchenRecipe(id)
    const kitchenRecipeSelect = kitchenRecipesList.filter(recipe => recipe.id === id);
    // setKitchenRecipeForm(kitchenRecipeSelect[0]);
    console.log(kitchenRecipeSelect[0]);
    
    getKitchenRecipe(kitchenRecipeSelect[0]);
    
    
  }
 
  
  
  return (
    <>
      <TableRow onClick={() => selectOnClick(recipe.id)} 
        sx={{
          backgroundColor: 'red'
        }}

      >
        <TableCell>
          <Box>{recipe.name}</Box>
        </TableCell>
        <TableCell>
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={recipe.reviews} readOnly />
        </TableCell>
        <TableCell>
          <Switch disableTouchRipple={false} checked={recipe.cookedBefore} />
        </TableCell>
      </TableRow>
    </>
  );
}
