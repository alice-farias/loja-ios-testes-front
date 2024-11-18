import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {


  cartItems = [
    { name: 'Produto 1', quantity: 2, price: 100 },
    { name: 'Produto 2', quantity: 1, price: 50 },
  ];

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout() {
    alert('Compra finalizada!');
  }

}
