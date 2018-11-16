import { Component, OnInit , Output} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  id: String = '';
  name: String = '';


  constructor() { }

  ngOnInit() {
    console.log('text' + this.id);
  }
  click() {
    alert(this.id);
    this.id = '1111';
  }

}
