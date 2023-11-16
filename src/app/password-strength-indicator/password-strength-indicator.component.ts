import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-indicator',
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.css'],
})
export class PasswordStrengthIndicatorComponent {
  @Input() strength: string = '';

  sectionClass(sectionNumber: number): string {
    if (this.strength === 'Strong') {
      return 'green';
    } else if (this.strength === 'Medium' && sectionNumber <= 2) {
      return 'yellow';
    } else if (this.strength === 'Easy' && sectionNumber === 1) {
      return 'red';
    }

    return 'gray';
  }
}
