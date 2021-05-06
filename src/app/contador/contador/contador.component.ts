import { Component } from '@angular/core';

@Component({
  selector: 'app_contador',
  template: `
    <h1>{{ titulo }}</h1>

    <button (click)="acumular(-base)">-{{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(base)">+{{ base }}</button>
  `,
})
export class ContadorComponent {
  public titulo: string = 'Contaddor app';
  public numero: number = 0;
  public base: number = 5;

  public acumular(valor: number): void {
    this.numero += valor;
  }
}
