import { Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../interfaces/producto.interfaces';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ ProductCardComponent ],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export default class InputOutputComponent  implements OnDestroy {



  public products = signal<Product[]>([
    {
      id: 1,
      name: 'product 1',
      quantity: 2
    },
    {
      id: 2,
      name: 'product 2',
      quantity: 2
    }


  ])


  private intervalSubscription = interval(1000).pipe(
    tap( () => {
        this.products.update( (products => [
            ...products,
            {
              id: products.length + 1,
              name: `producto  ${ products.length + 1 } `,
              quantity:0
            }
        ]))
    }),
    take(5)
  ).subscribe();




  ngOnDestroy(): void {
   this.intervalSubscription.unsubscribe();
  }

}
