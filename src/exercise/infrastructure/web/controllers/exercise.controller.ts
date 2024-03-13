import { Request, Response } from "express";
import { ExerciseUseCases } from "../../../application/use_cases/ExerciseUseCases";
import {
  exerciseValidator,
  idExerciseValidator,
} from "../../../interfaces/validators/exerciseValidator";

export class ExerciseController {
  constructor(private exerciseUseCases: ExerciseUseCases) {}

  public getExercise = async (req: Request, res: Response) => {
    const { uuid } = req.params;
    try {
      const uuidValidated = await idExerciseValidator.validateAsync({
        _id: uuid,
      });
      const exercise = await this.exerciseUseCases.getExercise(uuidValidated);
      if (!exercise) {
        return res.status(404).json({ message: "Exercise not found" });
      }
      res.status(200).json(exercise);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public listExercises = async (req: Request, res: Response) => {
    const exercises = await this.exerciseUseCases.listExercises();
    try {
      if (!exercises) {
        return res.status(404).json({ message: "Exercises not found" });
      }
      res.status(200).json(exercises);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public createExercise = async (req: Request, res: Response) => {
    try {
      const exercise = await exerciseValidator.validateAsync(req.body);
      const exerciseCreated = await this.exerciseUseCases.createExercise(
        exercise
      );
      res.status(201).json(exerciseCreated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public updateExercise = async (req: Request, res: Response) => {
    const { uuid } = req.params;
    try {
      const uuidValidated = await idExerciseValidator.validateAsync({
        _id: uuid,
      });
      const exercise = await exerciseValidator.validateAsync(req.body);
      const exerciseUpdated = await this.exerciseUseCases.updateExercise(
        uuidValidated,
        exercise
      );
      res.status(200).json(exerciseUpdated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public deleteExercise = async (req: Request, res: Response) => {
    const { uuid } = req.params;
    try {
      const uuidValidated = await idExerciseValidator.validateAsync({
        _id: uuid,
      });
      const exerciseDeleted = await this.exerciseUseCases.deleteExercise(
        uuidValidated
      );
      if (!exerciseDeleted) {
        return res.status(404).json({ message: "Exercise not found" });
      }
      res.status(200).json(exerciseDeleted);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public filterExercises = async (req: Request, res: Response) => {
    const { muscleGroup, name } = req.query;
    try {
      if (typeof name === "string") {
        const exercises = await this.exerciseUseCases.filterExercisesByName(name);
        if (!exercises) {
          return res.status(404).json({ message: "Exercises not found" });
        }
        res.status(200).json(exercises);
      } else
      if (typeof muscleGroup === "string") {
        const filterArray = muscleGroup.split(",");
        const exercises = await this.exerciseUseCases.filterExercisesByMuscleGroup(filterArray);
        if (!exercises) {
          return res.status(404).json({ message: "Exercises not found" });
        }
        res.status(200).json(exercises);
      } else {
        res.status(400).json({ message: "Invalid filter" });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public createManyExercises = async (req: Request, res: Response) => {
    try {
      const exercises = req.body;
      const exercisesCreated = await this.exerciseUseCases.createManyExercises(exercises);
      res.status(201).json(exercisesCreated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  }

}


