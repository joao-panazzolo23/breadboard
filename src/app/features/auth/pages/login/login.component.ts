import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth-service';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../../../core/interfaces/login-response.interface';
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
  private login$!: Observable<LoginResponse>;
  protected loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {

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
    if (this.loginForm.invalid) return;
    this.router.navigateByUrl('/home').then(r => {
      if (!r) console.log("deu merda");
    })


    //todo: implementar o serviço de token
    // const {email, password} = this.loginForm.getRawValue();
    // this.authService.login(
    //   email, password
    // ).subscribe(() => {
    //   this.router.navigateByUrl('/home')
    // });
  }

  protected isFieldValid(field: string) {
    return this.loginForm.get(field)?.touched
      && this.loginForm.get(field)?.invalid;
  }
}
