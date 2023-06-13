const router = require('express').Router();
const { User, Recipes } = require('../models');
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');

router.get('/', (req, res) => {
    try {
    res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
      }
    });



    router.get('/recipes/:cuisine', async (req, res) => {
    
    let url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${req.params.cuisine}&apiKey=7c5341c2e1a248c391cbc63889b96f6f`
      try {
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)
    res.render("recipes", {data} )

      } catch (err) {
        res.status(500).json(err.message);
      }
    });

router.get('/recipe/:id', async (req, res) => {
  let url = `https://api.spoonacular.com/recipes/${req.params.id}/information&apiKey=7c5341c2e1a248c391cbc63889b96f6f`
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    res.render("one-recipe", {data} )
  } catch (err) {
      res.status(500).json(err);
  }
});
    
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
      res.render('login');
    }); 
  
router.get('/shopping-list', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name, ASC'],]
        })
      
    const users = userData.map((project) => project.get({ plain: true }));
  
    res.render('shopping-list', {
      users,
      logged_in: req.session.logged_in,
    });
    } catch (err) {
        res.status(500).json(err);
      }
    });

  router.get('/add-recipe', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name, ASC'],]
        })
        
    const users = userData.map((project) => project.get({ plain: true }));
    
    res.render('add-recipe', {
      users,
      logged_in: req.session.logged_in,
    });
    } catch (err) {
        res.status(500).json(err);
      }
    });

  router.get('/saved-recipes', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          order: [['name, ASC'],]
      })
          
      const users = userData.map((project) => project.get({ plain: true }));
      
      res.render('saved-recipes', {
        users,
        logged_in: req.session.logged_in,
      });
      } catch (err) {
          res.status(500).json(err);
        }
      });

    
    module.exports = router;
    
