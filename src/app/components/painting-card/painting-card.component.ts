import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../models/user.model'
import { Painting } from '../../models/painting.model'

@Component({
  selector: 'app-painting-card',
  templateUrl: './painting-card.component.html',
  styleUrls: ['./painting-card.component.css']
})
export class PaintingCardComponent implements OnInit {

  @Input() painting: Painting;

  constructor() { }

  ngOnInit() { }

  edit(name, code, id) {
    console.log(name, code, id);
  }
}
