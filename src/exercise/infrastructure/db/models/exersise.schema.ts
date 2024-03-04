import { Schema, model } from "mongoose";

const ImageSchema = new Schema({
    url: { type: String, required: true },
    description: { type: String, required: true }
  });

const VideoSchema = new Schema({
    difficultyLevel: { type: String, required: true, enum: ['Bajo', 'Medio', 'Alto']},
    url: { type: String, required: true },
    description: { type: String, required: true }
  });

const RecommendationSchema = new Schema({
    difficultyLevel: { type: String, required: true, enum: ['Bajo', 'Medio', 'Alto']},
    sets: { type: Number, required: true },
    repetitions: { type: Number, required: true },
    weight: { type: Number, required: true }
  });

  const validMuscleGroups = [
    "Pectorales", "Abdominales", "Biceps", "Triceps", "Espalda", 
    "Hombros", "Piernas", "Gluteos", "Pantorrillas", "Antebrazos"
  ];

const ExerciseSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        muscleGroup: { type: [{ type: String, enum: validMuscleGroups }], required: true },
        requiredEquipment: { type: [String], required: true },
        isRecommended: { type: Boolean, required: true },
        images: { type: [ImageSchema], required: true },
        videos: { type: [VideoSchema], required: true },
        recommendations: { type: [RecommendationSchema], required: true },
    },
    { timestamps: true }
);

const ExerciseModel = model('Exercise', ExerciseSchema);

export { ExerciseModel };