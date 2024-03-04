import { ExerciseEntity } from "../entities/exercise.entity";

export interface ExerciseRepository {
    findExerciseById(_id: string): Promise<ExerciseEntity | null>;
    listExercises(): Promise<ExerciseEntity[] | null>;
    createExercise(exercise: ExerciseEntity): Promise<ExerciseEntity | null>;
    updateExercise(uuid: string, exercise: ExerciseEntity): Promise<ExerciseEntity | null>;
    deleteExercise(uuid: string): Promise<boolean>;
    filterExercisesByMuscleGroup(muscleGroup: string[]): Promise<ExerciseEntity[] | null>;
    filterExercisesByName(name: string): Promise<ExerciseEntity[] | null>;
    }