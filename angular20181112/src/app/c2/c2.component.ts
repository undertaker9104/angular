import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../Customer/customer.model';

const CUSTOMERS: Customer[] = [
  {id: 'F001', name : 'Peter' , deposit : 12000.012},
  {id: 'F002', name : 'Sam' , deposit : 56000.8},
  {id: 'F003', name : 'Tom' , deposit : 1200000},
  {id: 'F004', name : 'Mary' , deposit : 3301},
  {id: 'F005', name : 'Jack' , deposit : 900},
];


@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  customers: Customer[] = CUSTOMERS;
  @Input() id: string;
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

  clickHandle() {
    alert(this.id);
  }


}
