import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


type Grade = 'A'| 'B'| 'F'

@Component({
  selector: 'control-flow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'control-flow.component.html',
})
export default class ControlFlowComponent { 

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public framworks =signal(["React", "Angular", "Vue.js", "Svelte", "Ember.js"]);
  public framworks2 =signal([]);


  public toggleContent(){
    this.showContent.update(value => !value);
  }

}
