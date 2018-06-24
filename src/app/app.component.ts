import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  serverData = [
    {
      "make": "Kia",
      "year": "2006",
      "model": "Sedona"
    },
    {
      "make": "Toyota",
      "year": "2015",
      "model": "Corolla"
    },
    {
      "make": "Toyota",
      "year": "2015",
      "model": "Sienna"
    }
  ]


}

