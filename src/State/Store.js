import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './PokemonSlice'

export default configureStore({
  reducer: {
    pokemonToCatch:pokemonReducer
  },
})