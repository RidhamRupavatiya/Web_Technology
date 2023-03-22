import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    name = "Gambhava Sir"
    number = 0.78
    person  = {name:"Gambhava Sir" ,age : 38 }
    imgPath = "https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg";

    ChangeProperty(){
      this.name = "Bala Sir";
      this.imgPath = "https://darshan.ac.in/U01/Faculty-Photo/09CEAVB_19042019_063947AM.jpg";
      this.person.age = 34;
      this.person.name = "Bala Sir";
    }
  }
