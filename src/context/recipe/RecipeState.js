import React, { useReducer } from 'react';
import axios from 'axios';

import RecipeContext from './recipeContext';
import RecipeReducer from './recipeReducer';

import {
  GET_ITEMS,
  // GET_ITEM,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_LOADING,
} from "../types";

//  FOR THE RANDOM SEARCH ACCORDING TO ONE ITEM
const lists = ['apple', 'chilli', 'banana', 'orange', 'pears', 'mango'];

let APP_ID;
let APP_KEY;

if (process.env.NODE_ENV !== 'production') {
  APP_ID = process.env.REACT_APP_RECIPE_APP_ID;
  APP_KEY = process.env.REACT_APP_RECIPE_APP_KEY;
}
else {
  APP_ID = process.env.RECIPE_APP_ID;
  APP_KEY = process.env.RECIPE_APP_KEY;
}

const RecipeState = props => {
  const initialState = {
    items: [],
    loading: false,
    error: null,
    item: null
  }

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  //  OPERATIONS
  //  TO GET THE SEARCH RESULT
  const searchResult = async searchBy => {
    try {
      dispatch({ type: SET_LOADING });
      const res = await axios.get(`https://api.edamam.com/search?q=${searchBy}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      dispatch({
        type: GET_ITEMS,
        payload: res.data.hits
      })
    }
    catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error.response
      })
      setTimeout(() => {
        dispatch({
          type: CLEAR_ERRORS
        })
      }, 3000);
    }
  }

  const getRecipies = async () => {
    const searchBy = lists[Math.floor(Math.random() * 6)];
    try {
      dispatch({ type: SET_LOADING });
      const res = await axios.get(`https://api.edamam.com/search?q=${searchBy}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      dispatch({
        type: GET_ITEMS,
        payload: res.data.hits
      })
    }
    catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error.response
      })
      setTimeout(() => {
        dispatch({
          type: CLEAR_ERRORS
        })
      }, 3000);
    }
  }

  return <RecipeContext.Provider
    value={{
      items: state.items,
      item: state.item,
      laoding: state.loading,
      error: state.error,
      getRecipies,
      searchResult
    }}
  >
    {props.children}
  </RecipeContext.Provider>

}

export default RecipeState;
