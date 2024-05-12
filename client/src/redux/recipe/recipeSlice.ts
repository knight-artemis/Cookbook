import { createSlice } from '@reduxjs/toolkit'
import { RecipeType } from '../../types'
import { fetchAllRecipes } from './recipeThunkActions'

const recipeInitialState: RecipeType[] = [
    {
    id: 0,
    name: '',
    ingredients: [''],
    instructions: [''],
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    difficulty: '',
    cuisine: '',
    caloriesPerServing: 0,
    tags: [''],
    userId: 0,
    image: '',
    rating: 0,
    reviewCount: 0,
    mealType: ['']
    }
]

const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState: recipeInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchAllRecipes.fulfilled,
            (state, { payload }: { payload: RecipeType[] }) => {
                return payload
            }
        )
    }
})


export default recipeSlice.reducer;