import { Router } from 'express';
import { getAllPets, addPetPage, addPet, getPetById, editPetPage, editPet, deletePet } from '../controllers/petController';

const router = Router();

router.get('/', getAllPets);
router.get('/new', addPetPage);
router.post('/new', addPet);
router.get('/:id', getPetById);
router.get('/edit/:id', editPetPage);
router.post('/edit/:id', editPet);
router.post('/delete/:id', deletePet);

export default router;