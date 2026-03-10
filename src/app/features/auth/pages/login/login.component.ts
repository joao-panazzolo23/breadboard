import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth-service';
import {Router} from '@angular/router';

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
  protected loginForm: FormGroup = this.createLoginForm();
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private authService = inject(AuthService)

  createLoginForm() {
    return this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public login() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    const {email, password} = this.loginForm.getRawValue();

    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => console.log('login failed')
      });
  }

  protected isFieldValid(field: string) {
    return this.loginForm.get(field)?.touched
      && this.loginForm.get(field)?.invalid;
  }
}
