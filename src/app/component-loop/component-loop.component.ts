import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-loop',
  templateUrl: './component-loop.component.html',
  styleUrls: ['./component-loop.component.css']
})
export class ComponentLoopComponent implements OnInit {
  @Input() components;

  constructor() { }

  ngOnInit(): void {
  }

}
