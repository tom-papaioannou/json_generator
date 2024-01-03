import { Component } from '@angular/core';
import { Level } from '../models/level';
import { Round } from '../models/round';

@Component({
  selector: 'app-generator-view',
  templateUrl: './generator-view.component.html',
  styleUrls: ['./generator-view.component.css']
})
export class GeneratorViewComponent {

  levelsJson: any[] = [];

  calculateLevelsJson(): any[] {

    this.levelsJson = [];
    for (let i = 1; i <= 30; i++) {
      let level = this.generateNewLevel(i);
      this.levelsJson.push(level);
    }

    return this.levelsJson;
  }


  generateNewLevel(level: number) : Level {
    let temp_level: Level = new Level();
    temp_level.level = level;
    temp_level.reward = 0;

    // Calculate rounds from level
    let roundsCounter = 1;

    for (let currentRoundNumber = 1; currentRoundNumber <= roundsCounter; currentRoundNumber++) {
      let round = new Round(currentRoundNumber);
      temp_level.rounds.push(round);
    }
    return temp_level;
  }

  generate() {
    this.calculateLevelsJson();
    var wrappedData = { levels: this.levelsJson };
    var sJson = JSON.stringify(wrappedData, null, 2);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "Levels.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
