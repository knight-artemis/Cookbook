import type { ConfigureStoreOptions } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import recipeSlice from './recipe/recipeSlice'
import { RecipeType } from '../types'

type StoreType = {
    recipeSlice: RecipeType[]
}

const storeOptions: ConfigureStoreOptions<StoreType> = {
    reducer: {
        recipeSlice
    }
}

export const store = configureStore(storeOptions)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch