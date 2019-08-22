import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'topMenu',
  templateUrl: './topMenu.component.html',
  styleUrls: ['./topMenu.component.scss']
})
export class TopMenuComponent implements OnInit {

    @Input() product;
    @Output() notify = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

}