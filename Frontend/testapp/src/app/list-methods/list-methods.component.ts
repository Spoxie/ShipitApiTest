import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { submitData } from '../app.component';

@Component({
  selector: 'app-list-methods',
  templateUrl: './list-methods.component.html',
  styleUrls: ['./list-methods.component.css'],
})
export class ListMethodsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  //ei tarvitse payloadia
  ngOnInit(): void {
    this.http
      .get('http://localhost:8000/list-methods')
      .subscribe((response) => {
        console.log('list-method response', response);
      });
  }
}
