import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() servicios:any;
  @Input() productos:any;
  linkedn = 'https://www.linkedin.com/in/andres-felipe-aravena-araya-44392023/'
}
