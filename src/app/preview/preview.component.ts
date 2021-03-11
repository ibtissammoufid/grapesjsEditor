import { Component, OnInit } from '@angular/core';
import { ExportService } from '../services/export.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  mytext: any;
  myjson: any;
  test: any;
  data: Array<any>;

  obj: any;
  constructor(private exportService: ExportService) { }
  

  ngOnInit(): void {
    this.getText();
    this.test=   [{"type":"text","components":[{"type":"textnode","content":"Insert your text here"}]}];
    this.obj = JSON.parse(this.mytext);
    //this.mytext= 'test';
    //this.mytext= get text()
    //this.test= this.myjson.type;
  }

  private getText(){
    this.mytext=this.exportService.mytext;
    this.myjson=this.exportService.myjson;
    //this.test= this.myjson[0].type;
  }
 

  get text(): any{
    return this.exportService.mytext;
  }

}
