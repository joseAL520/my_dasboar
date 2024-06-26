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



  public products = signal<Product[]>([ ])

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


  public updateProduct( product:Product, quantity: number){

    this.products.update( (products) => 
      products.map( (p) =>
        p.id === product.id ? { ...p, quantity} : p
      ) 
  )

  }

  ngOnDestroy(): void {
   this.intervalSubscription.unsubscribe();
  }

}
