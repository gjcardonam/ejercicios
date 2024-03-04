export class Video {
    difficultyLevel: string;
    url: string;
    description: string;
  
    constructor(difficultyLevel: string, url: string, description: string) {
      this.difficultyLevel = difficultyLevel;
      this.url = url;
      this.description = description;
    }
  }