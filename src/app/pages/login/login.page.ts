import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  loginForm: FormGroup;
  subscriptions: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private helpers: HelpersService,
    private loginService: LoginService
  ) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.helpers.presentLoading();
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;
      this.subscriptions.add(
        this.loginService.login(username, password).subscribe(res => {
          console.log(res);
          this.helpers.dismissLoading();
        }, ex => {
          this.helpers.dismissLoading();
          console.log(ex);
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
