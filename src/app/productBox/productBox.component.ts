import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'productBox',
  templateUrl: './productBox.component.html',
  styleUrls: ['./productBox.component.scss']
})
export class ProductBoxComponent implements OnInit {
    @Input() product;
    reviews: number = Math.floor(Math.random()*20 + 2);

    constructor() { }

    ngOnInit() {
    }

    getStarClass(index: number) : string {
		if(!this.product.rating){
		  return "";
		}

		if(index >= this.product.rating){
		  return "";
		} else if (index < this.product.rating) {
		  return "rating_star_full"
		}else {
		  return "rating_star_half"
		}
	}

}