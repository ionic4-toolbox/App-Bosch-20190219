import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-installation',
  templateUrl: './register-installation.page.html',
  styleUrls: ['./register-installation.page.scss'],
})
export class RegisterInstallationPage implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.registerForm = this.formBuilder.group({
      noSerie: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      supplier: ['', Validators.required],
      install_photo: ['', Validators.required],
      invoice_photo: ['', Validators.required]  ,
      comments: ['', Validators.required]    
    });
  }

  ngOnInit() {
  }

}
