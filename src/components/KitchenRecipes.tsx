import {
  FormControl,MenuItem,Select,Typography,Container,TableContainer,Grid,Table,TableHead,TableRow,TableCell,TableBody,InputBase,  Modal, Box, Button, TextField, RadioGroup, FormControlLabel, Radio, Switch, Fab, List, Rating
} from "@mui/material";
import React, { useContext, useState } from "react";
import { KitchenRecipesList } from "./KitchenRecipesList";
import AddIcon from "@mui/icons-material/Add";
import { KitchenRecipesGlobalContext } from "../context/KitcheRecipesGlobalState";
import iconSearch from "../assets/icon-search.png";
import ModalKitchenRecipe from "./ModalKitchenRecipe";
import { IKitchenRecipe } from '../interfaces/interfaces';
import iconDelete from "../assets/icon-delete.png";
import { useEffect } from 'react';


const KitchenRecipes = () => {
  const { kitchenRecipesList,addKitchenRecipe,kitchenRecipeSelect } = useContext(KitchenRecipesGlobalContext);

  // FILTER SEARCH BAR [INPUT]
  const [search, setSearch] = useState("");
  const onSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };
  // FILTER BY COOKED BEFORE [SELECT]
  const [cookedBefore, setCookedBefore] = useState("all");
  const onCookedBeforeChange = (e: any) => {
    setCookedBefore(e.target.value);
  };

  const filtered = kitchenRecipesList.filter((kr) => {
    return kr.name.toLowerCase().includes(search.toLowerCase());
  });

  const filterSearchAndSelect = () => {
    if (cookedBefore == "all") {
      return filtered;
    } else if (cookedBefore == "true") {
      return filtered.filter((kr) => {
        return kr.cookedBefore == true;
      });
    } else if (cookedBefore == "false") {
      return filtered.filter((kr) => {
        return kr.cookedBefore == false;
      });
    } else {
      return filtered;
    }
  };

  


  // ONCHANGE FORM CREATE
  const initialFormState: IKitchenRecipe = {
    id: "",
    name: "",
    reviews: 0,
    cookedBefore: false,
    ingredients: [],
    preparation: "",
  };
  const [kitchenRecipeForm, setKitchenRecipeForm] = useState(initialFormState);
  const onInputChange = (e: any) => {
    setKitchenRecipeForm({
      ...kitchenRecipeForm,
      [e.target.name]: e.target.value,
    });
  };

  const onCookedBeforeChangeForm = (e: any) => {
    setKitchenRecipeForm({
      ...kitchenRecipeForm,
      cookedBefore: e.target.checked,
    });
  }

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(kitchenRecipeForm);
    addKitchenRecipe(kitchenRecipeForm);
    // setKitchenRecipeForm(initialFormState)
     
    
  };
 
  useEffect(() => {
    localStorage.setItem('kitchenRecipeLocalStorage', JSON.stringify( kitchenRecipesList || [] ));
  }, [kitchenRecipesList])

  useEffect(() => {
    localStorage.setItem('kitchenRecipeSelectLocalStorage', JSON.stringify( kitchenRecipeSelect || [] ));
  }, [kitchenRecipeSelect])

  const [selectKitchenRecipeGET, setSelectKitchenRecipeGET] = useState(false)

  
  
  //MODAL
  const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper",
        border: "2px solid #000",
        width: "32%",
        height: "100%",
      };
 
  useEffect(() => {
    if (kitchenRecipeSelect.id ) {
      setOpen(true)
      // setKitchenRecipeForm(kitchenRecipeSelect);
      // setOpen(true);
    }
  }, [ kitchenRecipeSelect]);

  useEffect(()=>{
    if(open === false){
    //  localStorage.setItem('kitchenRecipeSelectLocalStorage',JSON.stringify([]))
    localStorage.removeItem('kitchenRecipeSelectLocalStorage') 
    }

  },[open])

  console.log(kitchenRecipeSelect.id)
  
  return (
    <>
      <Typography variant="h4">Kitchen Recipes</Typography>

      <Container
        maxWidth="lg"
        style={{
          padding: 0,
        }}
      >
        <FormControl
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
            marginTop: "20px",
            padding: "10px 0",
            width: "100%",
          }}
        >
          <Box
            style={{
              // color
              backgroundColor: "#F9F9F9",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "",
              border: "1px solid #000",
              borderRadius: "20px",
              // width: "100%",
              width: "490px",
              padding: "10px",
            }}
          >
            <img
              src={iconSearch}
              style={{ width: "40px", height: "40px", marginRight: "20px" }}
              alt="search"
            />
            <InputBase
              onChange={onSearchChange}
              value={search}
              name="search"
              sx={{
                width: "100%",
              }}
              placeholder="Search"
            />
          </Box>

          <Box
            style={{
              paddingLeft: "20px",
            }}
          >
            <FormControl>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "space-between",
                  // width: "200px",
                  border: "1px solid #000",
                  borderRadius: "20px",
                  padding: "10px",
                  pointer: "cursor",
                  backgroundColor: "#EBF0F3",
                }}
              >
                <Typography paddingRight={1}>Coocked Before: </Typography>
                <Select
                  style={{
                    borderRadius: "20px",
                    border: "none",
                  }}
                  variant="standard"
                  value={cookedBefore}
                  onChange={onCookedBeforeChange}
                >
                  <MenuItem
                    sx={{
                      width: "300px",
                    }}
                    value="all"
                  >
                    All
                  </MenuItem>
                  <MenuItem value="true">Active</MenuItem>
                  <MenuItem value="false">Inactive</MenuItem>
                </Select>
              </Box>
            </FormControl>
          </Box>
        </FormControl>
      </Container>

      <Grid container>
        <TableContainer>
          <Table>
            <TableHead
              style={{
                borderBottom: "5px solid #ccc",
              }}
            >
              <TableRow>
                <TableCell>Recipe Name</TableCell>
                <TableCell>Reviws</TableCell>
                <TableCell>Cooked Before</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterSearchAndSelect()?.map((recipe) => (
                <KitchenRecipesList key={recipe.id} recipe={recipe}  setKitchenRecipeForm={setKitchenRecipeForm}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* BOTON ABRIR MODAL */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        style={{
          position: "absolute" as "absolute",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#00bcd4",
          color: "#fff",
          borderRadius: "50%",
          boxShadow: "0px 0px 10px #00bcd4",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <AddIcon />
      </Fab>

        {/* MODAL GET */}

        <Modal
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
            <Typography variant="h5">{kitchenRecipeSelect.name}</Typography>
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
            <label>Ingredients</label>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <List>
                {kitchenRecipeSelect.ingredients}
              </List>
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

            <Typography>
              {kitchenRecipeSelect.preparation}
            </Typography>
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
            <Rating name="read-only" value={kitchenRecipeSelect.reviews} readOnly />
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
            <Switch disableTouchRipple={false} checked={kitchenRecipeSelect.cookedBefore} />
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
              <Button
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",

                }}
                variant="contained"
                color="primary"
                onClick={onFormSubmit}
              >
                {
                  kitchenRecipeSelect.id === undefined ?
                  ('Editasdas') : ('CREATEasdasd')
                
                }
                
              </Button>
          </Box>
        </Box>
      </Modal>

      {/* MODAL PUT */}

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
              // maxRows={8}
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
              onChange={onCookedBeforeChangeForm}
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
              <Button
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",

                }}
                variant="contained"
                color="primary"
                onClick={onFormSubmit}
              >
                CREATE
              </Button>
          </Box>
        </Box>
      </Modal> */}


    </>
  );
};

export default KitchenRecipes;
