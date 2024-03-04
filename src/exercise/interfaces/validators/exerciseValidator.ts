import Joi from "joi";

const exerciseValidator = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  muscleGroup: Joi.array()
    .items(
      Joi.string().valid(
        "Pectorales",
        "Abdominales",
        "Biceps",
        "Triceps",
        "Espalda",
        "Hombros",
        "Piernas",
        "Gluteos",
        "Pantorrillas",
        "Antebrazos"
      )
    )
    .required(),
  requiredEquipment: Joi.array().items(Joi.string()).required(),
  isRecommended: Joi.boolean().required(),
  images: Joi.array()
    .items(
      Joi.object({
        url: Joi.string().required(),
        description: Joi.string().required(),
      })
    )
    .required(),
  videos: Joi.array()
    .items(
      Joi.object({
        difficultyLevel: Joi.string().valid("Bajo", "Medio", "Alto").required(),
        url: Joi.string().required(),
        description: Joi.string().required(),
      })
    )
    .required(),
  recommendations: Joi.array()
    .items(
      Joi.object({
        difficultyLevel: Joi.string().valid("Bajo", "Medio", "Alto").required(),
        sets: Joi.number().required(),
        repetitions: Joi.number().required(),
        weight: Joi.number().required(),
      })
    )
    .required(),
});

const idExerciseValidator = Joi.object({
  _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/, "MongoDB ObjectId"),
});

export { exerciseValidator, idExerciseValidator };
