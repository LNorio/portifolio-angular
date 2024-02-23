import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';

import { HobbiesDetailsComponent } from './hobbies-details/hobbies-details.component';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [HobbiesDetailsComponent, CarouselComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})



export class HobbiesComponent {

  id: any = 0;

  getId(id: any){
    this.id = id;
  }
  
}
