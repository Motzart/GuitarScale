import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-neck',
  templateUrl: './guitar-neck.component.html',
  styleUrls: ['./guitar-neck.component.scss']
})
export class GuitarNeckComponent implements OnInit {

  @Input() key = 'C';
  constructor() { }

  ngOnInit() {
  }

  getTonic() {
    return `Tonica is ${this.key}`;
  }

}
