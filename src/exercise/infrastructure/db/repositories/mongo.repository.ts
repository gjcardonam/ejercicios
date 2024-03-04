import { ExerciseEntity } from "../../../domain/entities/exercise.entity";
import { ExerciseRepository } from "../../../domain/repositories/exercise.repository";
import { ExerciseModel } from "../models/exersise.schema";

export class MongoRepository implements ExerciseRepository {
    async createExercise(exerciseIn: ExerciseEntity): Promise<ExerciseEntity> {
        const exercise = await ExerciseModel.create(exerciseIn);
        return exercise.toObject();
    }
    async listExercises(): Promise<ExerciseEntity[]> {
        const exercises = await ExerciseModel.find();
        return exercises.map(exercise => exercise.toObject());
    }
    async findExerciseById(id: string): Promise<ExerciseEntity | null> {
        const exercise = await ExerciseModel.findById(id);
        return exercise as ExerciseEntity | null;
    }
    async updateExercise(id: string, exercise: ExerciseEntity): Promise<ExerciseEntity | null> {
        const updatedExercise = await ExerciseModel.findByIdAndUpdate(id, exercise, { new: true });
        return updatedExercise as ExerciseEntity | null;
    }
    async deleteExercise(id: string): Promise<boolean> {
        await ExerciseModel.findByIdAndDelete(id);
        return true;
    }
    async filterExercisesByMuscleGroup(muscleGroup: string[]): Promise<ExerciseEntity[] | null> {
        const exercises = await ExerciseModel.find({ muscleGroup: { $in: muscleGroup } });
        return exercises.map(exercise => exercise.toObject());
    }

    async filterExercisesByName(name: string): Promise<ExerciseEntity[] | null> {
        const exercises = await ExerciseModel.find({ name: { $regex: name, $options: 'i' } });
        return exercises.map(exercise => exercise.toObject());
    }
}