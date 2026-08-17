import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LivroService {
    obterLivros(): Livro[] {
        return [{
            id: 1,
            nome: 'Harry potter'
        },
        {
            id: 2,
            nome: 'O senhor dos anéis'
        }
        ]
    }

    obterLivrosApi() {
        return of(this.obterLivros())
        .pipe(delay(1000));
    }
}