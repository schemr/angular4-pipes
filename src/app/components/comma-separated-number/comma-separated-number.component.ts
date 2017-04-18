import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comma-separated-number',
  templateUrl: './comma-separated-number.component.html',
  styleUrls: ['./comma-separated-number.component.css']
})
export class CommaSeparatedNumberComponent implements OnInit {
  contents = [
    230000, 200, 9999, 42343, 777888999
  ]
  constructor() { }

  ngOnInit() {
  }

}
