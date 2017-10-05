import { Component, OnInit, Input } from '@angular/core';

import { Painting } from '../../models/painting.model'

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css']
})
export class PaintingListComponent implements OnInit {

  @Input() paintings: Painting[];

  constructor() { }

  ngOnInit() {
  }

}
