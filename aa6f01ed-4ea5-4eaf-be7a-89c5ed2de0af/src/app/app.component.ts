import { Component } from '@angular/core';
import { Estudante } from './shared/modelo/estudante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema';

  estudante: Estudante;
  estudantes: Array<Estudante>;
  constructor() {
    this.estudante = new Estudante();
    this.estudantes = [
      new Estudante('jujoajo@academico.com', '203580'),
      new Estudante('lojoana@academico.com', '2475768679'),
    ];
  }

  cadastrar(): void{
    this.estudantes.push(this.estudante);
    this.estudante = new Estudante();
  }
}
