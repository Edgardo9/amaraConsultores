import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CarouselComponent } from '../carousel/carousel.component';
import { CardsComponent } from '../cards/cards.component';
import { SeparatorComponent } from '../separator/separator.component';
import { SeccionComponent } from '../seccion/seccion.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductosComponent } from '../productos/productos.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
    CarouselComponent, 
    CardsComponent, 
    SeparatorComponent, 
    SeccionComponent, 
    FooterComponent,
    ProductosComponent,
    ServiciosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listProds = ["Soluciones de control de inventario de hardware y software", "Soluciones de mesa de servicios certificadas bajo ITILv4", "Soluciones de Backup"];
  listServs = ["Consultoría ITIL", "Soluciones ITSM e ITAM", "Servicios administrados"];
}
