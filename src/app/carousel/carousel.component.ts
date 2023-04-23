import { Component, Input, OnInit } from '@angular/core';

interface carouseSlider {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouseSlider[] = [];
  @Input() indicadores = true;
  @Input() controls = true;
  @Input() slideAuto = false;
  @Input() sliderIntervalos = 4000;


  selecteIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.slideAuto) {
      this.sliderImagesAuto()
    }
  }

  selectedImage(index: number): void {
    this.selecteIndex = index;
  }

  onPreview(): void {
    if (this.selecteIndex === 0) {
      this.selecteIndex = this.images.length - 1;
    } else {
      this.selecteIndex--;
    }
  }

  onNext(): void {
    if (this.selecteIndex === this.images.length - 1) {
      this.selecteIndex = 0;
    } else {
      this.selecteIndex++;
    }
  }

  sliderImagesAuto(): void {
   setInterval(() => {
    this.onNext();
   }, this.sliderIntervalos);
  }

}
