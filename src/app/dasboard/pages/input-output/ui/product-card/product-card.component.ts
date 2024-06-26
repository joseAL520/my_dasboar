import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input, output } from '@angular/core';
import { Product } from '../../../../interfaces/producto.interfaces';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  
  <div class="bg-slate-200 w-full rounded-xl h-40 flex justify-center items-center flex-col">
        <span> {{ product().name }} </span>
        <h2 class="font-bold text-sn my-2"> {{ product().id }} </h2>
        <button 
          (click)="incrementQuantity()"
            class="bg-blue-500 p-2 rounded text-white
                hover:bg-blue-300 transiition-all
            ">
            cantidad {{  product().quantity  }}
        </button>    
    </div>
  
  
  
  `,
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  // nuevo input
  public product = input.required<Product>();
  // nuevo output
  public onIncrementeQuatity = output<number>();





  public incrementQuantity(): void{
    this.onIncrementeQuatity.emit(this.product().quantity + 1);
  }

}
