import { Component, OnInit } from '@angular/core';


declare var setup:any;


@Component({
  selector: 'app-the-page',
  templateUrl: './the-page.component.html',
  styleUrls: ['./the-page.component.css']
})
export class ThePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setup();
  }

}
