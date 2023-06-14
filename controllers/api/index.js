const router = require('express').Router();
const userRoutes = require('./userRoutes');

// router.use('/users', userRoutes);
router.use('/users', userRoutes);

// apiKey = "7c5341c2e1a248c391cbc63889b96f6f"

// const test_image = document.getElementById('test2')
// const test_iname = document.getElementById('test1')
// const test_title = document.getElementById('test3')
// const test_servings = document.getElementById('test4')
// const test_summary = document.getElementById('test5')
// const test_cuisine = document.getElementById('test6')
// const test_instuctions = document.getElementById('test7')


// async function spoonAPI() {
//     //Put api key in ENV file
//     let url = `https://api.spoonacular.com/recipes/648084/information?apiKey=7c5341c2e1a248c391cbc63889b96f6f`
//     const response = await fetch(url)
//     const data = await response.json()

//         var recipeImage = data.image
//         //Probably need some kind of for loop to sift through the extended ingredient arry made up of objects
//         //Fetch for ingredient list
//         const ingredients = []
//         for (let i = 0; i < data.extendedIngredients.length; i++) {
//             ingredients.push(data.extendedIngredients[i])
//             const ingredientName = array.name
//             console.log(ingredientName)
//         }
//         var ingredientName = data.extendedIngredients[0].original
//         // var ingredientImage

//         //Going to need another For loop her to grab all the equipment
//         //var equipmentName = data
//         //var equipmentImage

//         const dataObject = {}
//         res.render("recipes", {data} )

//         var recipeTitle = data.title;
//         var recipeServings = data.servings;
//         var recipeSummary = data.summary;
//         var recipeCuisine = data.cusines;
//         var instructions = data.instructions;

        
               
//         test_image.src = recipeImage
//         test_iname.innerHTML = ingredientName

//         test_title.innerHTML = recipeTitle
//         test_servings.innerHTML = recipeServings
//         test_summary.innerHTML = recipeSummary
//         test_cuisine.innerHTML = recipeCuisine
//         test_instuctions.innerHTML = instructions
// };


// document.getElementById('button_test').addEventListener('click', function() {
//     spoonAPI()
// });


//When endpoint is hit, trigger fetch, send to handlebars, Handlebars will parse it out where it needs to go
module.exports = router;