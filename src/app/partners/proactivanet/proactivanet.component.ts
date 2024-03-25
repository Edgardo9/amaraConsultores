import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proactivanet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proactivanet.component.html',
  styleUrl: './proactivanet.component.css'
})



export class ProactivanetComponent {

  constructor (){
    window.scrollBy(0, 0);
  }

  public metricasLideres:any[] = [
    {
      valor: "+400",
      desc: "clientes en todo el mundo"
    },
    {
      valor: "70%",
      desc: "de actividad en Latinoamérica"
    },
    {
      valor: "+15",
      desc: "países"
    },
    {
      valor: "25",
      desc: "años de experiencia"
    },
  ];

  public metricasSoporte:any[] = [
    {
      valor: "4,9 / 5",
      desc: "Valoración en Gartner Peer Insights"
    },
    {
      valor: "96%",
      desc: "Retención de nuestros clientes"
    },
    {
      valor: "9,5 / 10",
      desc: "Calidad del Soporte en G2"
    },
    {
      valor: "Customer Success",
      desc: "Acompañamiento al cliente post-implementación"
    },
  ];

  public soportePais:any[] = [
    {
      pais: "España",
      direccion: "Espacio Tecnológico El Molinon 33203",
      ciudad: "Gijón, Asturias",
      telefono: "(+34) 985099215",
      clases: "card-pais col-lg-12 col-xl-2"
    },
    {
      pais: "Chile",
      direccion: "Huérfanos 830, Of. 09 - 117",
      ciudad: "Santiago Centro",
      telefono: "(+56 2) 27121684",
      clases: "card-pais col-lg-12 col-xl-2"
    },
    {
      pais: "Colombia",
      direccion: "Carrera 7, #71 -21 Torre A",
      ciudad: "Bogotá D. C.",
      telefono: "(571) 3582517",
      clases: "card-pais col-lg-12 col-xl-2"
    },
    {
      pais: "México",
      direccion: "Corporativo Punto Polanco Lago Alberto #319, Piso 6 CP 11520",
      ciudad: "México CDMX",
      telefono: "(5255) 41240708",
      clases: "card-pais col-lg-12 col-xl-2"
    },
    {
      pais: "Perú",
      direccion: "Av. Victor Andrés Belaunde 147 Via Principal 133, Edificio Torre Real dos ofina 13-113",
      ciudad: "San Isidro, Lima",
      telefono: "(511) 7436628",
      clases: "card-pais col-lg-12 col-xl-2"
    },
  ]

}
