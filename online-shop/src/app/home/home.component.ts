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
    name: 'T-Shirt',
    price: 25,
    category: 'Clothes',
    image: 'https://i.pinimg.com/originals/60/5b/c1/605bc1b961ef8acf50b3e445f01fa4c8.jpg',
  };

  ngOnInit(): void {
  }

}
