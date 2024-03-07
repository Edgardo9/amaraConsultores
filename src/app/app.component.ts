import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { SeparatorComponent } from './separator/separator.component';
import { SeccionComponent } from './seccion/seccion.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            NavComponent, 
            CarouselComponent, 
            CardsComponent, 
            SeparatorComponent, 
            SeccionComponent, 
            FooterComponent,
            ProductosComponent,
            ServiciosComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Amara Consultores';
  listProds = ["Soluciones de control de inventario de hardware y software", "Soluciones de mesa de servicios certificadas bajo ITILv4", "Soluciones de Backup"];
  listServs = ["Consultoría ITIL", "Soluciones ITSM e ITAM", "Servicios administrados"];
}
