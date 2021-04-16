import { Component, OnInit } from '@angular/core';
import { products } from '../products'; /* call the file product.ts giving path */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productslist = products;/* link the product list from the product.ts to productslist*/

  ngOnInit(): void {
  }

}
