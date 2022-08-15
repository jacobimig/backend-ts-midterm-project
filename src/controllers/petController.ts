import { RequestHandler } from "express";
import { Pets } from "../models/pets";

export const defaultPets: RequestHandler = (req, res, next) => {
 res.redirect('/pets');
}

export const getAllPets: RequestHandler = async (req, res, next) => {
 let petList: Pets[] = await Pets.findAll();
 res.render('all-pets', { petList });
}

export const getPetById: RequestHandler = async (req, res, next) => {
 let itemId = req.params.id;
 let petItem: Pets | null = await Pets.findByPk(itemId);

 if (petItem) {
  res.render('pet-detail', { foundPet: petItem });
 }
 else {
  res.status(404).render('error', { message: 'pet not found' });
 }
}

export const addPetPage: RequestHandler = (req, res, next) => {
 res.render('add-pet');
}

export const addPet: RequestHandler = async (req, res, next) => {
 let newPet: Pets = req.body;
 await Pets.create(newPet);
 res.redirect('/pets');
}

export const editPetPage: RequestHandler = async (req, res, next) => {
 let itemId = req.params.id;
 let petItem: Pets | null = await Pets.findOne({
  where: { id: itemId }
 });

 if (petItem) {
  res.render('edit-pet', { foundPet: petItem });
 }
 else {
  res.status(404).render('error', { message: 'Pet not found' });
 }
}

export const editPet: RequestHandler = async (req, res, next) => {
 let itemId = req.params.id;
 let updatedItem: Pets = req.body;

 let [updated] = await Pets.update(updatedItem, {
  where: { id: itemId }
 });

 if (updated === 1) {
  res.redirect(`/pets/${itemId}`);
 }
 else {
  res.render('error', { message: 'Pet could not be updated' });
 }
}

export const deletePet: RequestHandler = async (req, res, next) => {
 let itemId = req.params.id;

 let deleted = await Pets.destroy({
  where: { id: itemId }
 });

 if (deleted) {
  res.redirect('/pets')
 }
 else {
  res.status(404).render('error', { message: 'Cannot find pet' });
 }
}