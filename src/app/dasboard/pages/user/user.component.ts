import { CommonModule } from '@angular/common';
import {  Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from "../../shared/title/title.component";
import { User } from '../../interfaces/req-response';
import {toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';


@Component({
    selector: 'pages-user',
    standalone: true,
    templateUrl: 'user.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    imports: [
        CommonModule,
        TitleComponent
    ]
})
export default class UserComponent { 

  private route = inject( ActivatedRoute )
  private userServices = inject(UsersService)

  // public user = signal<User | undefined>( undefined)

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userServices.getUserById(id))
    )
  )


  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      } `;
    }

    return 'Información del usuario';
  });

}
