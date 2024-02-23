import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbiesService } from '../../../../services/hobbies.service';
import { Hobbie } from '../../../../interfaces/hobbie';

@Component({
  selector: 'app-hobbies-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies-details.component.html',
  styleUrl: './hobbies-details.component.css'
})
export class HobbiesDetailsComponent {

  hobbie: Hobbie;

  @Input() id: Number;

  constructor( private service: HobbiesService){ }

  ngOnChanges(){
    this.service.getDetails(this.id).subscribe( resp =>{
      this.hobbie = resp;
    });
  }

}
