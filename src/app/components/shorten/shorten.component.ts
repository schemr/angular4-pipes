import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css']
})
export class ShortenComponent implements OnInit {

  content = '안녕하세요 반갑습니다.'
  constructor() { }

  ngOnInit() {
  }

}
