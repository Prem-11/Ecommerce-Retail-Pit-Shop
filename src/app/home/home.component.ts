import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: '../../assets/Images/Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category:'electronics',
        subcategory:'mobiles',
      },
    },
    {
      banerimage: '../../assets/Images/Baner/Baner_Laptop.png',
      category: {
        id: 0,
        category:'electronics',
        subcategory:'laptops',
      },
    },
    {
      banerimage: '../../assets/Images/Baner/Baner_Chair.png',
      category: {
        id: 0,
        category:'furniture',
        subcategory:'chair',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
