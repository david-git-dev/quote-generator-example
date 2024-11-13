import {configureStore  } from "@reduxjs/toolkit";
import quoteReducer from './quoteSlice'
export const store = configureStore({
  reducer:{
    quoteName:quoteReducer//aqui debe coincidir el nombre de la clave con el reducer nombrado, en este caso quoteName es el nombre identificador de nuestro estado por ello la clave se debe llamar quoteName
  }
})