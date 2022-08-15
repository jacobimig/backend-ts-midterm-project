"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.editPet = exports.editPetPage = exports.addPet = exports.addPetPage = exports.getPetById = exports.getAllPets = exports.defaultPets = void 0;
const pets_1 = require("../models/pets");
const defaultPets = (req, res, next) => {
    res.redirect('/pets');
};
exports.defaultPets = defaultPets;
const getAllPets = async (req, res, next) => {
    let petList = await pets_1.Pets.findAll();
    res.render('all-pets', { petList });
};
exports.getAllPets = getAllPets;
const getPetById = async (req, res, next) => {
    let itemId = req.params.id;
    let petItem = await pets_1.Pets.findByPk(itemId);
    if (petItem) {
        res.render('pet-detail', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'pet not found' });
    }
};
exports.getPetById = getPetById;
const addPetPage = (req, res, next) => {
    res.render('add-pet');
};
exports.addPetPage = addPetPage;
const addPet = async (req, res, next) => {
    let newPet = req.body;
    await pets_1.Pets.create(newPet);
    res.redirect('/pets');
};
exports.addPet = addPet;
const editPetPage = async (req, res, next) => {
    let itemId = req.params.id;
    let petItem = await pets_1.Pets.findOne({
        where: { id: itemId }
    });
    if (petItem) {
        res.render('edit-pet', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found' });
    }
};
exports.editPetPage = editPetPage;
const editPet = async (req, res, next) => {
    let itemId = req.params.id;
    let updatedItem = req.body;
    let [updated] = await pets_1.Pets.update(updatedItem, {
        where: { id: itemId }
    });
    if (updated === 1) {
        res.redirect(`/pets/${itemId}`);
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
};
exports.editPet = editPet;
const deletePet = async (req, res, next) => {
    let itemId = req.params.id;
    let deleted = await pets_1.Pets.destroy({
        where: { id: itemId }
    });
    if (deleted) {
        res.redirect('/pets');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find pet' });
    }
};
exports.deletePet = deletePet;
