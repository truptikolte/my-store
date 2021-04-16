import { Component, OnInit } from '@angular/core';
import { products } from '../products'; /* call the file product.ts giving path */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productslist = products;/* link the product list from the product.ts to productslist*/
  share(){
    window.alert("Product has been shared");
  }
  onNotify(){
    window.alert("You will be notified when items goes to sale");
  }

  ngOnInit(): void {
  }

}
