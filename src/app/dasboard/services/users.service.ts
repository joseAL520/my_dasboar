import { Injectable, computed, inject, signal } from '@angular/core';
import { UseResponse, User, UserResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State {
    users: User[];
    loading: boolean;
}

@Injectable({
    providedIn: 'root'
})


export class UsersService {


    private http = inject( HttpClient );

    // coloca en privado para hacer transpilacion
    #state = signal<State>({
        loading:true,
        users: []
    })

    // el computed es solo lectura
    public users = computed(() => this.#state().users);
    public loading = computed(() => this.#state().loading);

    constructor() { 
       
        this.http.get<UserResponse>(' https://reqres.in/api/users  ')
            .subscribe(res =>{
                this.#state.set({
                    loading:false,
                    users: res.data
                })
            });

    }
    

    getUserById( id:string ){
      return  this.http.get<UseResponse>(` https://reqres.in/api/users/ ${ id }  `)
        .pipe(
            delay(1000),
            map(rep => rep.data )
        )

    }
}