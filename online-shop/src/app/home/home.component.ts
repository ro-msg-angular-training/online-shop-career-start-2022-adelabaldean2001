import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  product = {
    id: 1,
    brand: 'Nurton',
    name: 'Office chair',
    price: 210,
    category: 'Furniture',
    image: 'https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg',
  };

  ngOnInit(): void {
  }

}
