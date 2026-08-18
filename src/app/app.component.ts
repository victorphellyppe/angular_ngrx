import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livro } from './livros/livro.model';
import { LivroService } from './livros/livro.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {


  livroService = inject(LivroService);
  livros$ = this.livroService.obterLivrosApi();
  
  // ngOnInit(): void {
  //   this.livros = this.livroService.obterLivros();

  // }

  

 
}