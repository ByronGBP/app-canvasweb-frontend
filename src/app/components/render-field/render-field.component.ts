import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { User } from '../../models/user.model'
import { Painting } from '../../models/painting.model'

import { PaintingService } from '../../services/painting.service'

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-render-field',
  templateUrl: './render-field.component.html',
  styleUrls: ['./render-field.component.css']
})

export class RenderFieldComponent implements OnInit {
  @Input() painting: any;

  renderUrl: string = environment.apiUrl + '/render/';

  constructor() { }

  ngOnInit() {
    this.renderUrl += this.painting._id;
  }
  
}
