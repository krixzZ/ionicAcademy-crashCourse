import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  miVariable = 'Hola ke ase!';

  constructor() { }

  updateMiVariable() {
    this.miVariable = 'Chao ke aseeeee';
  }

}
