import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { EditorComponent } from './editor/editor.component';
import { LoopComponentComponent } from './loop-component/loop-component.component';
import { MyeditorComponent } from './myeditor/myeditor.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full' },//dyalna
    { path: 'editor',             component: EditorComponent },
    { path: 'myeditor',             component: MyeditorComponent },
    { path: 'preview',             component: PreviewComponent },
    { path: 'loop',             component: LoopComponentComponent },
    { path: 'comment',             component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
