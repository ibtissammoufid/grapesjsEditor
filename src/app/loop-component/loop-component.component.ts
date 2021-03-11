import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-component',
  templateUrl: './loop-component.component.html',
  styleUrls: ['./loop-component.component.css']
})
export class LoopComponentComponent implements OnInit {
  postComments =  [

    {
      text: "6",
      comments: [{
          text: "1.2",
          comments: [{
            text: "1.2.1 "
          }]
        },
        {
          text: "2.1",
          comments: [{
            text: "2.1.1"
          }]
        }
      ]
    },
    {
      text: "2",
      comments: [{
        text: "2.1",
        comments: [{
          text: "2.1.1"
        }]
      }]
    }
  
  ] 


   
  constructor() { }

  ngOnInit(): void {
  }

}
