const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

apiKey = "7c5341c2e1a248c391cbc63889b96f6f"

function spoonAPI() {
    let url = `https://api.spoonacular.com/recipes/random?apiKey=7c5341c2e1a248c391cbc63889b96f6f`;
    fetch(url)
    .then(response => {
        return response.json();
    })
    //.then()
}

spoonAPI()

module.exports = router;