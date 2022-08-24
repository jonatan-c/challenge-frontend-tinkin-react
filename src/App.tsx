import { useState } from 'react'
import './App.css'
import KitchenRecipes from './components/KitchenRecipes'
import Heading from './components/Heading'
import AsideImage from './components/AsideImage'
import { Grid } from '@mui/material'
import { KitchenRecipesGlobalProvider } from './context/KitcheRecipesGlobalState'

function App() {

  return (
    <>
      <KitchenRecipesGlobalProvider>
        <Heading />
        <Grid
          // container
          maxWidth="lg"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <Grid
            item
            style={{
              width: "30%",
            }}
          >
            <AsideImage />
          </Grid>
          <Grid
            item
            style={{
              width: "70%",
            }}
          >
            <KitchenRecipes />
          </Grid>
        </Grid>
      </KitchenRecipesGlobalProvider>
    </>
  );
}

export default App
