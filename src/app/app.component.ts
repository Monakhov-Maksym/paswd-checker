import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  passwordForm!: FormGroup;

  passwordStrength: string = '';
  constructor(
    private fb: FormBuilder,
    private passwordStrengthService: PasswordStrengthService,
  ) {}
  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: [''],
    });
    this.passwordForm.get('password')?.valueChanges.subscribe((value) => {
      this.passwordStrength =
        this.passwordStrengthService.calculateStrength(value);
    });
  }
}
