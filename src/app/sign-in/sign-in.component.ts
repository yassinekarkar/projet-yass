import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'el-bill-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {
  @Input() url = '';

  constructor() { }
  ngOnInit(): void {

  }
}
