import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })




  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    this.authService
    .login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
    .subscribe((response) => {
      this.snackBar.open('Login feito com Sucesso!!', 'OK', {duration: 3000});
    })

    console.log(this.loginForm.value);
  }

}
