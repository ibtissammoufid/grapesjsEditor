import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { MyeditorComponent } from './myeditor/myeditor.component';

const routes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full' },//dyalna
    { path: 'editor',             component: EditorComponent },
    { path: 'myeditor',             component: MyeditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
