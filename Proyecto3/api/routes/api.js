var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

const Sequelize = require('sequelize');
const Albums = require('../models').albums;  
const Songs = require('../models').canciones;  
const Artists = require('../models').cantantes;  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/genres', function(req, res, next) {
  Artists.findAll(
    {attributes: { exclude: ["id","nombre","pais","edad","img"] }}
    )  
.then(resultado => {  
    res.json(resultado);  
})    
.catch(error => res.status(400).send(error)) 
})

router.get('/artists', function(req, res, next) {
    Artists.findAll(
      {attributes: { exclude: ["pais","edad"] }}
      )  
  .then(resultado => {  
      res.json(resultado);  
  })    
  .catch(error => res.status(400).send(error)) 
})

router.get('/artists/:id', function(req, res, next) {
  models.cantantes.findOne({ 
    where: { id: req.params.id } ,
    include: [{ 
    model: models.albums,
    as: 'albums'
  }]
  })  .then(resultado => {  
      res.json(resultado)
  })  
  .catch(error => res.status(400).send(error))
})

router.get('/artists/genre/:genero', function(req, res, next) {
  models.cantantes.findAll({ 
    where: { genero: req.params.genero} ,
    include: [{ 
    model: models.albums,
    as: 'albums'
  }]
  })  .then(resultado => {  
      res.json(resultado)
  })  
  .catch(error => res.status(400).send(error))
})

router.get('/albums', function(req, res, next) {
  Albums.findAll(
    {attributes: { exclude: ["id_cantante","fecha_lanzamiento","ventas"] }}
  )  
.then(resultado => {  
    res.json(resultado);  
})    
.catch(error => res.status(400).send(error)) 
})

router.get('/albums/:id', function(req, res, next) {
  models.albums.findOne({ 
    where: { id: req.params.id } ,
    include: [{ 
    model: models.canciones,
    as: 'canciones'
  }]
  })  .then(resultado => {  
      res.json(resultado)
  })  
  .catch(error => res.status(400).send(error))
})

module.exports = router;
