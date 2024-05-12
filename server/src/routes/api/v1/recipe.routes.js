const router = require('express').Router()

router.get('/getAllRecepies', async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/recipes')
        const result = await response.json()
        res.status(200).json(result.recipes)
    } catch (error) {
        res.status(500).json({ err: 'Ошибка в recipeRouter' })
    }
})

module.exports = router