import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { MyeditorComponent } from './myeditor/myeditor.component';
import { PreviewComponent } from './preview/preview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TextComponent } from './components-templates/text';
import { TitleComponent } from './components-templates/title';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    MyeditorComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true },
      types: [
        { name: 'title', component: TitleComponent },
        { name: 'text', component: TextComponent },
      ]  
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
