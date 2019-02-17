import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: any[];

  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

}
