import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth-service';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../../../core/interfaces/login-response.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private login$!: Observable<LoginResponse>;
  protected loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder) {

    this.loginForm = this.createLoginForm();
  }

  createLoginForm() {
    return this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public login() {
    debugger
    console.log("chegou")
    if (this.loginForm.invalid) return;

    const {email, password} = this.loginForm.getRawValue();
    this.login$ = this.authService.login(
      email, password
    );
  }

  protected isFieldValid(field: string) {
    return this.loginForm.get(field)?.touched
      && this.loginForm.get(field)?.invalid;
  }
}
