import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import { db } from './models';
import { defaultPets } from './controllers/petController';
import petRoutes from './routes/petRoutes';

const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../src/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', { layout: 'layout' });

app.use('/pets', petRoutes);
app.use('/', defaultPets);

app.use((req: Request, res: Response, next: NextFunction) => {
 res.status(404).render('error', {
  message: "This is not the URL you are looking for!"
 });
})

// Syncing our database
db.sync().then(() => {
 console.info("connected to the database!")
});

app.listen(3000);