import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  
  <div class="bg-slate-200 w-full rounded-xl h-40 flex justify-center items-center flex-col">
        <span>Producto 1</span>
        <h2 class="font-bold text-sn my-2"> #1 </h2>
        <button 
            class="bg-blue-500 p-2 rounded text-white
                hover:bg-blue-300 transiition-all
            ">
            Agregar 1
        </button>    
    </div>
  
  
  
  `,
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent { }
