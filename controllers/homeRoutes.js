const router = require('express').Router();
const { User, Recipes } = require('../models');
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/', (req, res) => {
    try {
    res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/recipes/:cuisine', withAuth, async (req, res) => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${req.params.cuisine}&apiKey=${process.env.API_KEY}`
      try {
        const userData = await User.findAll({
          attributes: { exclude: ['password'] }
      }); 
    
    const users = userData.map((project) => project.get({ plain: true }));
    const response = await fetch(url)
    const data = await response.json()

    //console.log(data)
    res.render("recipes", {
      data,
      users,
      logged_in: true
  });

      } catch (err) {
        res.status(500).json(err.message);
      }
    });

router.get('/recipe/:id', withAuth, async (req, res) => {
  let url = `https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${process.env.API_KEY}`
  try {
    const userData = await User.findAll({
    attributes: { exclude: ['password'] }
        });
    const users = userData.map((project) => project.get({ plain: true }));
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    res.render("one-recipe", {
      data,
      users,
      logged_in: true
    });
  } catch (err) {
      res.status(500).json(err);
  }
});
   
router.get('/recipe/random', withAuth, async (req, res) => {
  let randomURL = `https://api.spoonacular.com/recipes/648084/information?apiKey=${process.env.API_KEY}`
  try {
    const userData = await User.findAll({
    attributes: { exclude: ['password'] }
        });
    const users = userData.map((project) => project.get({ plain: true }));
    const response = await fetch(randomURL)
    const data = await response.json()
    console.log(data)

    res.render("one-recipe", {
      data,
      users,
      logged_in: true
    });
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
        attributes: { exclude: ['password'] }
            });
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
            attributes: { exclude: ['password'] }
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
          attributes: { exclude: ['password'] }      
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
    
