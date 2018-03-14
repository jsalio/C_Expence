import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Login } from '../../core/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  loginCredential: Login;
  loginform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private auth: AuthService
  ) {  }

  ngOnInit() {
    this.createForm();
  }

  goToLogin() {
    this.loginCredential = this.loginform.getRawValue();
    console.log(this.loginCredential);
    this.auth.signup(
      this.loginCredential.username,
      this.loginCredential.password
    );
  }

  createForm(): any {
    this.loginform = this.fb.group({
      mail: ['', Validators.required ],
      pasw: ['', Validators.required ],
      cpwd: ['', Validators.required ],
    });
  }
}
