import { Component, OnInit } from '@angular/core';
import { ExportService } from '../services/export.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  mytext: any;
  constructor(private exportService: ExportService) { }
  

  ngOnInit(): void {
    this.getText();
    //this.mytext= 'test';
    //this.mytext= get text()
  }

  private getText(){
    this.mytext=this.exportService.mytext;
  }
 

  get text(): any{
    return this.exportService.mytext;
  }

}
