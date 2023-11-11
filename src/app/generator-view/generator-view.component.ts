import { Component } from '@angular/core';
import { Level } from '../models/level';

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
      this.levelsJson.push(new Level(i).getLevel());
    }

    return this.levelsJson;
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
