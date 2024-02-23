import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {

  @Output() id = new EventEmitter<any>();

  images = [
            "../../assets/images/tenis.jpg",
            "../../assets/images/academia.jpg",
            "../../assets/images/culinaria.jpg",
            "../../assets/images/estudos.jpg",
            "../../assets/images/online.jpg",
            "../../assets/images/tabuleiro.jpg"
          ];

  activeImage: any = 0;

  nextImage(){
    if(this.activeImage == (this.images.length-1)){
      this.activeImage = 0;
    }
    else{
      this.activeImage += 1;
    }
    this.id.emit(this.activeImage);
  }

  prevImage(){
    if(this.activeImage == 0){
      this.activeImage = (this.images.length-1);
    }
    else{
      this.activeImage -= 1;
    }
    this.id.emit(this.activeImage);
  }

}
