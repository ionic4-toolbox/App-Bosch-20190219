import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
    private loginService: LoginService,
    private router: Router
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
          this.helpers.dismissLoading();
          this.loginForm.controls['username'].setValue('');
          this.loginForm.controls['password'].setValue('');
          this.loginForm.reset();
          this.router.navigate(['/home']);
        }, ex => {
          if (ex.status === 403) {
            this.helpers.dismissLoading();
            this.helpers.presentToast('Crendenciales inválidas.');
          }
        })
      );
    }
  }

  checkEnter(key: string) {
    if (key === 'Enter') {
      this.login();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
