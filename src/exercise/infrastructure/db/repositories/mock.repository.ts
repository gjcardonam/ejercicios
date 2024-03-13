import { ExerciseEntity } from "../../../domain/entities/exercise.entity";
import { ExerciseRepository } from "../../../domain/repositories/exercise.repository";

const MOCK_EXERCISE : ExerciseEntity = {
    uuid: "123456",
    name: "Pull up",
    description: "Pull up description",
    muscleGroup: ["Back", "Biceps"],
    requiredEquipment: ["Pull up bar"],
    isRecommended: true,
    duration: 0,
    images: [],
    videos: [],
    recommendations: [],
}

export class MockRepository implements ExerciseRepository {
    async createExercise(exerciseIn: ExerciseEntity): Promise<ExerciseEntity | null> {
        return MOCK_EXERCISE;
    }
    async listExercises(): Promise<ExerciseEntity[]> {
        return [MOCK_EXERCISE , MOCK_EXERCISE];
    }
    async findExerciseById(id: string): Promise<ExerciseEntity | null> {
        return MOCK_EXERCISE;
    }
    async updateExercise(id: string, exercise: ExerciseEntity): Promise<ExerciseEntity | null> {
        return MOCK_EXERCISE;
    }
    async deleteExercise(id: string): Promise<boolean> {
        return true;
    }
    async filterExercisesByMuscleGroup(filter: string[]): Promise<ExerciseEntity[] | null> {
        return [MOCK_EXERCISE , MOCK_EXERCISE];
    }
    async filterExercisesByName(name: string): Promise<ExerciseEntity[] | null> {
        return [MOCK_EXERCISE , MOCK_EXERCISE];
    }
    async createManyExercises(exercises: ExerciseEntity[]): Promise<ExerciseEntity[] | null> {
        return [MOCK_EXERCISE , MOCK_EXERCISE];
    }
}