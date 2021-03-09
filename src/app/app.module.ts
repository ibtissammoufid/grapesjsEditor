import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { MyeditorComponent } from './myeditor/myeditor.component';

import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    MyeditorComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
