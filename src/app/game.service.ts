import { Questions } from './mock-questions';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private score = 15;
  private currentImages = [[], []];
  private currentQuestion = '';

  public getScore(): number {
    return this.score;
  }
  public getCurrentImages(): string[][] {
    return this.currentImages;
  }

  public getCurrentQuestion(): string {
    return this.currentQuestion;
  }

  private getRandomQuestions(): void {
    // randomize array
    Questions.sort(() => 0.5 - Math.random());
    // get first 4 images
    const randomImages = Questions.slice(0, 4);
    // pick one question randomly to be current q
    this.currentQuestion =
      randomImages[Math.floor(Math.random() * randomImages.length)];
    //update images to be shown in the game
    this.currentImages = [
      [randomImages[0]],
      [randomImages[1]],
      [randomImages[3]],
    ];
  }
}
