export class Recommendation {
    difficultyLevel: string;
    sets: number;
    repetitions: number;
    weight: number;
  
    constructor(difficultyLevel: string, sets: number, repetitions: number, weight: number) {
      this.difficultyLevel = difficultyLevel;
      this.sets = sets;
      this.repetitions = repetitions;
      this.weight = weight;
    }
  };