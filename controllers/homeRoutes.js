const router = require('express').Router();
const { User, Recipes } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    try {
    res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
      }
    });


router.get('/recipes', async (req, res) => {
  try {
    const recipeData = await Recipes.findAll(req.body, {
      include: [
        {
          model: Recipes,
          attributes: ['name', 'servings'],
        },
      ],
    });
    
        const recipe = recipeData.get({ plain: true });
    
        res.render('recipes', {
          ...recipe
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/recipes/:id', async (req, res) => {
  try {
    const recipeData = await Recipes.findByPk(req.params.id, {
      include: [
        {
          model: Recipes,
          attributes: ['name', 'servings', 'instructions', 'ingredients'],
        },
      ],
    });
        
      const recipe = recipeData.get({ plain: true });
        
        res.render('one-recipe', {
          ...recipe
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
    
