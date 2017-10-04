import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { PaintingService } from './services/painting.service';

import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { PaintingPageComponent } from './pages/painting-page/painting-page.component';

import { PaintingCardComponent } from './components/painting-card/painting-card.component';
import { CodeFieldComponent } from './components/code-field/code-field.component';
import { RenderFieldComponent } from './components/render-field/render-field.component';


const routes: Routes = [
  { path: 'playground', component: PlaygroundPageComponent },
  { path: '', component: AppComponent },
  { path: 'painting', children: [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: ':id', component: PaintingPageComponent }
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundPageComponent,
    PaintingCardComponent,
    CodeFieldComponent,
    RenderFieldComponent,
    PaintingPageComponent,
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
