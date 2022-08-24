import { Modal, Box, Typography, Button, TextField, RadioGroup, FormControlLabel, Radio, Switch, Fab } from '@mui/material';
import React, { useContext, useState } from 'react'
import { KitchenRecipesGlobalContext } from '../context/KitcheRecipesGlobalState';
import { IKitchenRecipe } from '../interfaces/interfaces';
import iconDelete from "../assets/icon-delete.png";


const ModalKitchenRecipe = ({open,setOpen,handleClose,handleOpen} : any) => {
 

    // const initialFormState: IKitchenRecipe = {
    //     id: "",
    //     name: "",
    //     reviews: 0,
    //     cookedBefore: false,
    //     ingredients: [],
    //     preparation: "",
    //   };
    //   const [kitchenRecipeForm, setKitchenRecipeForm] = useState(initialFormState);
    //   const onInputChange = (e: any) => {
    //     setKitchenRecipeForm({
    //       ...kitchenRecipeForm,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
    
    //   const onFormSubmit = (e: any) => {
    //     e.preventDefault();
    //     console.log(kitchenRecipeForm);
    //   };
    
    //   const style = {
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     bgcolor: "background.paper",
    //     border: "2px solid #000",
    //     width: "32%",
    //     height: "100%",
    //   };


  return (
    <>
      {/* <Modal
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        open={open}
        onClose={handleClose}
 
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              // alignItems: "",
              justifyContent: "space-between",
              // padding: "20px",}
              width: "90%",
              padding: "20px",
            }}
          >
            <Typography variant="h5">New Recipe</Typography>
            <Button
              onClick={handleClose}
              style={{
                color: "black",
              }}
            >
              X
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              padding: "20px",
            }}
          >
            <label>Recipe Name</label>
            <TextField
              // id="filled-number"
              placeholder="E.g. Slow cooker beef and rice hot pot"
              label="Title*"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              sx={{
                border: "1px solid #ccc",
                borderRadius: "px",
                padding: "10px",
              }}
              onChange={onInputChange}
              value={kitchenRecipeForm.name}
              name="name"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              padding: "20px",
            }}
          >
            <label>Ingredients</label>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Typography>1</Typography>
              <TextField
                label="Ingredients"
                placeholder="Ingredients"
                margin="normal"
                variant="outlined"
                onChange={onInputChange}
                value={kitchenRecipeForm.ingredients}
                name="ingredients"
              ></TextField>
              <Button>
                <img
                  src={iconDelete}
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                  alt=""
                />
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              padding: "20px",
            }}
          >
            <label>Preparation</label>

            <TextField
              label="Preparation"
              placeholder="Preparation"
              margin="normal"
              variant="outlined"
              multiline
              rows={6}
              maxRows={8}
              onChange={onInputChange}
              value={kitchenRecipeForm.preparation}
              name="preparation"
            ></TextField>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              padding: "20px",
            }}
          >
            <label>Reviews</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="reviews"
              value={kitchenRecipeForm.reviews}
              onChange={onInputChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
            </RadioGroup>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              padding: "20px",
            }}
          >
            <label>Coocked Before</label>
            <Switch
              // checked={kitchenRecipeForm.cookedBefore}
              onChange={onInputChange}
              name="cookedBefore"
              value={kitchenRecipeForm.cookedBefore}
              color="success"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              // alignItems: "center",
              justifyContent: "right",
              width: "90%",
              padding: "20px",
            }}
          >
            <Fab
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              variant="extended"
              color="primary"
              aria-label="add"
            >
              <Button
                sx={{
                  color: "white",
                }}
                onClick={onFormSubmit}
              >
                CREATE
              </Button>
            </Fab>
          </Box>
        </Box>
      </Modal> */}
    
    </>
    )
}

export default ModalKitchenRecipe