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

router.get('/recipes/:cuisine', withAuth, async (req, res) => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${req.params.cuisine}&apiKey=7c5341c2e1a248c391cbc63889b96f6f`
      try {
        const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          // order: [['name, ASC'],]
      }); 
    const user = userData.get({ plain: true });
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)
    res.render("recipes", {
      data,
      user,
    logged_in: true
  });

      } catch (err) {
        res.status(500).json(err.message);
      }
    });

router.get('/recipe/:id', withAuth, async (req, res) => {
  let url = `https://api.spoonacular.com/recipes/${req.params.id}/information&apiKey=7c5341c2e1a248c391cbc63889b96f6f`
  try {
    const userData = await User.findAll({
    attributes: { exclude: ['password'] },
            order: [['name, ASC'],]
        });
    const user = userData.get({ plain: true });
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    res.render("one-recipe", {
      data,
      user,
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
        attributes: { exclude: ['password'] },
                order: [['name, ASC'],]
            });
        const user = userData.get({ plain: true });
  
    res.render('shopping-list', {
      user,
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
        
        const user = userData.get({ plain: true });
    
    res.render('add-recipe', {
      user,
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
          
      const user = userData.get({ plain: true });
      
      res.render('saved-recipes', {
        user,
        logged_in: req.session.logged_in,
      });
      } catch (err) {
          res.status(500).json(err);
        }
      });

    
    module.exports = router;
    
