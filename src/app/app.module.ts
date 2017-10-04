import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { PaintingService } from './services/painting.service';

import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';

import { PaintingCardComponent } from './components/painting-card/painting-card.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CodeFieldComponent } from './components/code-field/code-field.component';
import { RenderFieldComponent } from './components/render-field/render-field.component';

const routes: Routes = [
  { path: 'playground', component: PlaygroundPageComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundPageComponent,
    PaintingCardComponent,
    ProjectPageComponent,
    CodeFieldComponent,
    RenderFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, PaintingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
