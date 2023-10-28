import { Component } from '@angular/core';

@Component({
  selector: 'app-generator-view',
  templateUrl: './generator-view.component.html',
  styleUrls: ['./generator-view.component.css']
})
export class GeneratorViewComponent {

  calculateLevelsJson(): string {

    //
    // Algorithm for 
    // creating
    // levels for 
    // Royal Gardener
    //

    const levelsJson =`\'levels\' : {
      \'level01\' : {
        \'x\' : 1
      }
    }`;

    return levelsJson;
  }

  generate() {
    var sJson = JSON.stringify(this.calculateLevelsJson());
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(this.calculateLevelsJson()));
    element.setAttribute('download', "Levels.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
