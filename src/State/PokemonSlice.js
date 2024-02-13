import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemonToCatch',
    initialState: {
      pokemonToCatch: 0,
    },
    reducers: {
        catchState: (state) => {
          state.pokemonToCatch += 1
        },
      },
    })
    
    // Action creators are generated for each case reducer function
    export const { catchState } = pokemonSlice.actions
    
    export default pokemonSlice.reducer