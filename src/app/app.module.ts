import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { MyeditorComponent } from './myeditor/myeditor.component';
import { PreviewComponent } from './preview/preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TextComponent } from './components-templates/text';
import { ButtonComponent } from './components-templates/button';
import { TitleComponent } from './components-templates/title';
import { SectionWrapperComponent } from './components-templates/section';


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
      wrappers: [
        { name: 'section', component: SectionWrapperComponent },
      ],
      types: [
        { name: 'button', component: ButtonComponent },
        { name: 'text', component: TextComponent },
        { name: 'h1', component: TitleComponent },
      ]  
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
