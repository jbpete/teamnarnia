const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

apiKey = "7c5341c2e1a248c391cbc63889b96f6f"

function spoonAPI() {
    let url = `https://api.spoonacular.com/recipes/648084/information?apiKey=7c5341c2e1a248c391cbc63889b96f6f`
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        //Probably need some kind of for loop to sift through the extended ingredient arry made up of objects
        //Fetch for ingredient list
        var ingredientName
        var ingredientImage

        //Going to need another For loop her to grab all the equipment
        var equipmentName
        var equipmentImage

        var recipeTitle
        var recipeServings
        var recipeSummary
        var recipeCuisine
        var instructions






    })
}

spoonAPI()

module.exports = router;