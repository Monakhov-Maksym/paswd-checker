import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculateStrength(password: string): string {
    if (!password || password.length < 8) {
      return '';
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z\d]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return 'Strong';
    } else if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return 'Medium';
    } else {
      return 'Easy';
    }
  }
}
