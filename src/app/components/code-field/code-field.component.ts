import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { User } from '../../models/user.model'
import { Painting } from '../../models/painting.model'

import { PaintingService } from '../../services/painting.service'

declare var ace:any;


//TODO:- Fix error when change the value of var notDone

@Component({
  selector: 'app-code-field',
  templateUrl: './code-field.component.html',
  styleUrls: ['./code-field.component.css'],
})
export class CodeFieldComponent implements OnInit {
  @Input() painting: any;

  @ViewChild('editor') editor;
  aceEditor:any;
  notDone:boolean = true
  constructor(private paintingService: PaintingService) {

  }

  ngOnInit() {

    this.editor.nativeElement.style.height = '500px';
    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.session.setMode('ace/mode/javascript')
    this.aceEditor.setTheme("ace/theme/terminal");
    this.aceEditor.$blockScrolling = Infinity;
  }

  setCodeToEditor() {
    this.aceEditor.setValue(this.painting.code);
    this.notDone = false;
  }

  handleClickEditor() {

    this.savePainting();

  }

  private savePainting() {

    let id = this.painting._id;
    let name = this.painting.name;
    let code = this.aceEditor.getValue();
    let ownerId = this.painting.ownerId;

    let newPainting = new Painting ({
      id,
      name,
      code,
      ownerId
    })

    this.paintingService.editPainting(newPainting)
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      )
  }
}
