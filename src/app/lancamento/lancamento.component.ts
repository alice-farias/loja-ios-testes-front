import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamento',
  standalone: true,
  imports: [],
  templateUrl: './lancamento.component.html',
  styleUrl: './lancamento.component.css'
})
export class LancamentoComponent {
  hovered: boolean[] = [false, false, false, false];

  onHover(index: number, state: boolean) {
    this.hovered[index] = state;
  }
}