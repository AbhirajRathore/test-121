import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]|undefined;
  constructor() {
    this.todos = [
      {
        sno:3,
        title:"this is title1",
        desc:"description1",
        active: true,

      },
      {
        sno:4,
        title:"this is title2",
        desc:"description2",
        active: true,

      },
      {
        sno:5,
        title:"this is title3",
        desc:"description3",
        active: true,

      }
    ]
   }

  ngOnInit(): void {}

}
