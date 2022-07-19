import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products-detail',
  templateUrl: './list-products-detail.component.html',
  styleUrls: ['./list-products-detail.component.scss']
})
export class ListProductsDetailComponent implements OnInit {

  constructor() { }

  products = [
  {
    id: 1,
    brand: 'Nurton',
    name: 'Office chair',
    price: 210,
    category: 'Furniture',
    image: 'https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg',
  },

  {
    id: 2,
    brand: 'Ikea',
    name: 'Sofa',
    price: 21,
    category: 'Furniture',
    image: 'https://wakefit-co.s3.ap-south-1.amazonaws.com/img/sofa-sets/napper/regular/lifestyle/FOBL.jpg',
  },

    {
      id: 3,
      brand: 'Canadian Wood',
      name: 'Bed',
      price: 150,
      category: 'Furniture',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiJpJUv00zqeE16mNLzoR0y0Rv_ZOS3_xjA&usqp=CAU',
    }



  ];

  ngOnInit(): void {
  }

}