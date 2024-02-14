import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemonToCatch',
    initialState: {
      pokemonToCatch: "",
    },
    reducers: {
        setPokemonToCatch: (state, name) => {
          state.pokemonToCatch = name
        },
      },
    })
    
    // Action creators are generated for each case reducer function
    export const { setPokemonToCatch } = pokemonSlice.actions
    
    export default pokemonSlice.reducer