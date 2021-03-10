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
  fields: FormlyFieldConfig[] = [
    {
      type: 'title',
      templateOptions: {
        label: 'TITLE TEST',
      }
    },
    {
      type: 'text',
      templateOptions: {
        label: 'TEXT TEST 1',
      }
    },
    {
      type: 'text',
      templateOptions: {
        label: 'TEXT TEST 2',
      }
    }
  ];
  ngOnInit(): void {
      this.route.params.subscribe(paramsId => {
        this.pageName = paramsId.page;
      });
      this.apiService.getPage(this.pageName).subscribe(
      data => {
        this.dataPage = data;
      },
      err => {
        this.dataPage = JSON.parse(err.error).message;
      }
    );
  }
}
