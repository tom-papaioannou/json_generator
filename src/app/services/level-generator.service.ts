import { Injectable } from '@angular/core';
import { Level } from '../models/level';
import { Round } from '../models/round';
import { Flower } from '../models/flower';

@Injectable({
  providedIn: 'root'
})
export class LevelGeneratorService {

  temp_level: Level = new Level();

  generateNewLevel(level: number): Level {
    this.temp_level = new Level();
    this.temp_level.level = level;
    this.temp_level.reward = 0;

    let roundsCounter = 1;
    
    console.log(" ---- Level: " + level + " ---- ");

    for (let currentRoundNumber = 1; currentRoundNumber <= roundsCounter; currentRoundNumber++) {
      this.temp_level.rounds.push(this.generateNewRound(level, currentRoundNumber, roundsCounter));
    }
    return this.temp_level;
  }

  generateNewRound(level: number, round: number, roundsCounter: number): Round {
    let temp_round = new Round();
    let flowersCounter = 1;
    
    temp_round.round = round;

    console.log(" - Round : " + temp_round + " - ");
    for (let currentFlower = 0; currentFlower < flowersCounter; currentFlower++) {
      console.log("Flower " + (currentFlower + 1));
      temp_round.flowers.push(this.generateNewFlower(level, roundsCounter, flowersCounter));
    }

    return temp_round;
  }

  generateNewFlower(level: number, roundsCounter: number, flowersCounter: number) : Flower{

    let temp_flower = new Flower();
    temp_flower.roots = 1
    temp_flower.rootTiles = 1;

    console.log("Roots for each Flower: " + temp_flower.roots);
    console.log("RootTiles for each Root: " + temp_flower.rootTiles);

    return temp_flower;
  }
}
