import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../core/services/auth-service';
import { Router } from '@angular/router';
import { ControlsOf } from '../../../../shared/types/forms.types';
import { LoginDto } from '../../interfaces/login-interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  protected loginForm: FormGroup<ControlsOf<LoginDto>> = this.createLoginForm();

  createLoginForm(): FormGroup<ControlsOf<LoginDto>> {
    return this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public login() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    var controls = this.loginForm.controls;

    this.authService
      .login(controls.email.value, controls.password.value)
      .subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => console.log('login failed'),
      });
  }
}
