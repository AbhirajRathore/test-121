import { Component, OnInit } from '@angular/core';
import { Contactus } from './contactus.model';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactus= new Contactus()

  constructor() { }

  ngOnInit() {
  }
  submit(){
    console.log(this.contactus);
  }
}
