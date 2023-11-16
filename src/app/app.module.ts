import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStrengthIndicatorComponent } from './password-strength-indicator/password-strength-indicator.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrengthIndicatorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
