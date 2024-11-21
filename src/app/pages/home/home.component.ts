import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { AnimacaoComponent } from "../../animacao/animacao.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, AnimacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
