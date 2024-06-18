import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  
     <h1 class="text-3xl mb-5">
       {{titulo}}
     </h1>
  
  
  `,
  styleUrl: './title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {

 @Input( {required:true} )
 public titulo: string = '';

}
