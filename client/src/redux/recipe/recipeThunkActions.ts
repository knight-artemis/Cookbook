import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RecipeType } from '../../types'

export const fetchAllRecipes = createAsyncThunk('recipe/get', async () => {
    const response = await axios.get<RecipeType[]>(
    `${import.meta.env.VITE_API}/recipe/getAllRecepies`,
    { withCredentials: true },
    )
    return response.data
})
