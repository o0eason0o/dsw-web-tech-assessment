import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'mainApp',
  templateUrl: './mainApp.component.html',
  styleUrls: ['./mainApp.component.scss']
})
export class MainAppComponent implements OnInit {

	products = products;

    @Output() notify = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

}