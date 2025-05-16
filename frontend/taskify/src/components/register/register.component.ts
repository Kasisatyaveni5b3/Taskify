import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userForm = new FormGroup({
  userName: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
  confirmPassword: new FormControl('', [Validators.required])
}, { validators: this.passwordMatch });

   passwordMatch(form: AbstractControl): ValidationErrors | null {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

}
