const express = require('express');

module.exports = app => {
    const tutorials = require('../controllers/tutorial.controller');

    let router = require('express').Router();

    //Create a new Tutorial
    router.post('/', tutorials.create);

    //Retrieve all Tutorials
    router.get('/', tutorials.findAll);

    //Retrieve all published Tutorials
    router.get('/published', tutorials.findAllPublished);
}