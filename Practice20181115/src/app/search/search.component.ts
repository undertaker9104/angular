import { Component, OnInit } from '@angular/core';
import { InputVO } from '../InputVO/input-vo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  input: InputVO = {
    CDKIND: '',
    ACTNO1: '',
    PIDNO: ''
  };

  constructor() {

   }

  ngOnInit() {
  }

  onSubmit({value, valid}, event: Event) {
    if (valid) {
      alert(value.CDKIND);
    }
    event.preventDefault();
  }
}
