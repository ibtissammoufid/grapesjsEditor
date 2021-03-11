import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FieldType} from '@ngx-formly/core';


interface pageData {
    pageName: string;
    data: string;
  }

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  constructor(private apiService : ApiService, private route: ActivatedRoute) { }
  pageName : string;
  dataPage : pageData;
  
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[];
  ngOnInit(): void {
      this.route.params.subscribe(paramsId => {
        this.pageName = paramsId.page;
      });
      this.apiService.getPage(this.pageName).subscribe(
        data => {
          this.dataPage = data;
          console.log(JSON.parse(this.dataPage.data));
          this.fields = JSON.parse(this.dataPage.data);
        },
        err => {
          this.dataPage = JSON.parse(err.error).message;
        }
      );
  }
}
