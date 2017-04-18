import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkify',
  templateUrl: './linkify.component.html',
  styleUrls: ['./linkify.component.css']
})
export class LinkifyComponent implements OnInit {
  contents = [
    {"text": "그냥 텍스트"},
    {"text": "URL 포함 텍스트 www.google.com"},
    {"text": "E-Mail 포함 텍스트 test@test.com"}
  ];
  example = '<p *ngFor="let content of contents" [innerHtml]="content.text | linkify"></p>'
  constructor() { }

  ngOnInit() {
  }

}
