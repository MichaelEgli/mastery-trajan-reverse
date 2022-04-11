import { Component, OnInit } from '@angular/core';
import { Customer } from './model/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [
    {
      id: 1,
      name: 'Customer 1',
      surname: 'Hugo',
      birthday: '27.07.1977'
    },
    {
      id: 2,
      name: 'Customer 2',
      surname: 'Mario',
      birthday: '08.08.1988'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
