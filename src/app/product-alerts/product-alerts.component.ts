import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';/*To receive the product data */
import { Output, EventEmitter } from '@angular/core';

/*@Component provide the metadata about the component including its selector, url and styles */
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
