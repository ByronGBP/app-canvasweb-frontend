import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { User } from '../../models/user.model'
import { Painting } from '../../models/painting.model'

import { PaintingService } from '../../services/painting.service'

declare var ace:any;

@Component({
  selector: 'app-code-field',
  templateUrl: './code-field.component.html',
  styleUrls: ['./code-field.component.css'],
})
export class CodeFieldComponent implements OnInit {

  private _painting: any;

  @Input() set painting(painting: any) {
    this._painting = painting;
    this.setupAceEditor();
    this.setCodeToEditor();
  }

  @ViewChild('editor') editor;
  aceEditor:any;

  constructor(private paintingService: PaintingService) {
  }

  ngOnInit() { }

  setCodeToEditor() {
    this.aceEditor.setValue(this._painting.code);
  }

  handleClickEditor() {
    this.savePainting();
    this.refresh();
  }

  private refresh(): void {
    window.location.reload();
  }

  private setupAceEditor() {
    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.session.setMode('ace/mode/javascript')
    this.aceEditor.setTheme("ace/theme/terminal");
    this.aceEditor.$blockScrolling = Infinity;
  }

  private savePainting() {
    let id = this._painting._id;
    let name = this._painting.name;
    let code = this.aceEditor.getValue();
    let ownerId = this._painting.ownerId;

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
