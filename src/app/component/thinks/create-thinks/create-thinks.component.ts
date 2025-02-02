import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thinks',
  templateUrl: './create-thinks.component.html',
  styleUrls: ['./create-thinks.component.css']
})
export class CreateThinksComponent implements OnInit {

  think = {
    id: '1',
    content: 'Aprendendo Angular',
    authorship: 'Dev',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
