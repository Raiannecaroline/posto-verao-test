import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:
        'https://veja.abril.com.br/wp-content/uploads/2021/06/GettyImages-1228933825.jpg?quality=70&strip=info&w=1280&h=720&crop=1',
      imageAlt: 'Posto Shell',
    },
    {
      imageSrc:
        'https://www.shell.com.br/motoristas/combustiveis/shell-v-power/_jcr_content/pagePromo/image.img.960.png/1668801212029/shell-v-power-promo.png',
      imageAlt: 'Shell V-Power',
    },
    {
      imageSrc:
        'https://www.shell.com.br/motoristas/promocoes-e-campanhas/app-shell-box/_jcr_content/pagePromo/image.img.960.png/1626192856445/shell-box.png',
      imageAlt: 'Shell Box',
    },
    {
      imageSrc:
        'https://www.shell.com.br/motoristas/lojas-shell-select/_jcr_content/pagePromo/image.img.960.png/1677186477042/shell-select-promo.png',
      imageAlt: 'Shell Select',
    },
  ]

}
