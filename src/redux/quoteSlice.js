import {createSlice  } from "@reduxjs/toolkit";
const initialState ={
  quote:'',
  author:''
}
export const quoteSlice =createSlice({
  name:'quoteName',//identificador del estado
  initialState,
  reducers:{//esto son los reducers de react-redux
    quoteGenerate:(state,action) =>{
      const {quote,author} = action.payload
      state.quote = quote
      state.author = author
    }
  }
})
//aqui exportamos los action creators de quoteSlice por medio de la propiedad actions que genera createSlice()
export const {quoteGenerate} = quoteSlice.actions
//exportamos por defecto el reducer del slice que es el que usamos en el store.js
export default quoteSlice.reducer