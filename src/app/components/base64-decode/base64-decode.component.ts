import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base64-decode',
  templateUrl: './base64-decode.component.html',
  styleUrls: ['./base64-decode.component.css']
})
export class Base64DecodeComponent implements OnInit {
  content = '7JWI64WV7ZWY7IS47JqUIOuwmOqwkeyKteuLiOuLpA=='
  constructor() { }

  ngOnInit() {
  }

}
