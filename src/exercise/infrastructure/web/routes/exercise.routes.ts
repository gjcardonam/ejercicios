import { Router } from 'express';
import { ExerciseController } from '../controllers/exercise.controller';
import { ExerciseUseCases } from '../../../application/use_cases/ExerciseUseCases';
import { MongoRepository } from '../../db/repositories/mongo.repository'
import { MockRepository } from '../../db/repositories/mock.repository'

const router = Router();

const repository = process.env.MOCK === 'true' ? new MockRepository() : new MongoRepository();
const exerciseUseCases = new ExerciseUseCases(repository);
const exerciseController = new ExerciseController(exerciseUseCases);

router.get('/exercises/filter', exerciseController.filterExercises)
router.get('/exercises/:uuid', exerciseController.getExercise);
router.get('/exercises/', exerciseController.listExercises);
router.post('/exercises/', exerciseController.createExercise);
router.put('/exercises/:uuid', exerciseController.updateExercise);
router.delete('/exercises/:uuid', exerciseController.deleteExercise);
router.post('/exercises/createMany', exerciseController.createManyExercises);


export default router;
