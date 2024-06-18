import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "../../shared/title/title.component";

@Component({
    selector: 'change-detection',
    standalone: true,
    templateUrl: 'change-detection.component.html',
    imports: [
        CommonModule,
        TitleComponent
    ],

    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public frameworkSignal = signal({
    name: 'angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'angular',
    releaseDate: 2016
  }


  constructor(){

    setTimeout(() => {
      // this.frameworkAsProperty.name = 'react';


      this.frameworkSignal.update( value => ({...value,name:'react'}))
  
      console.log('hecho');
    }, 3000);


  }


}
