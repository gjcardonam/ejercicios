import { ExerciseRepository } from "../../domain/repositories/exercise.repository";
import { ExerciseEntity } from "../../domain/entities/exercise.entity";

export class ExerciseUseCases {
  constructor(private exerciseRepository: ExerciseRepository) {}

  public  getExercise = async (uuid:string) => {
    const exercise = await this.exerciseRepository.findExerciseById(uuid)
    return exercise
  }

  public  listExercises = async () => {
    const exercises = await this.exerciseRepository.listExercises()
    return exercises
  }

  public  createExercise = async (exerciseData: Partial<ExerciseEntity>) => {
    const exercise = new ExerciseEntity(exerciseData);
    const exerciseCreated = await this.exerciseRepository.createExercise(exercise)
    return exerciseCreated
  }

  public  updateExercise = async (uuid: string, exerciseData: Partial<ExerciseEntity>) => {
    const exercise = new ExerciseEntity(exerciseData);
    const exerciseUpdated = await this.exerciseRepository.updateExercise(uuid,exercise)
    return exerciseUpdated
  }

  public  deleteExercise = async (uuid:string) => {
    const exerciseDeleted = await this.exerciseRepository.deleteExercise(uuid)
    return exerciseDeleted
  }

  public  filterExercisesByMuscleGroup = async (filter: string[]) => {
    const exercises = await this.exerciseRepository.filterExercisesByMuscleGroup(filter)
    return exercises
  }

  public  filterExercisesByName = async (name: string) => {
    const exercises = await this.exerciseRepository.filterExercisesByName(name)
    return exercises
  }
}