import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { HobbiesDetailsComponent } from './hobbies-details/hobbies-details.component';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [HobbiesDetailsComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})



export class HobbiesComponent {


  ngOnInit(){
    
  }
  
}
