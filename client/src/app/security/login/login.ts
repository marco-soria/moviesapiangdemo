import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayErrors } from '../../shared/components/display-errors/display-errors';
import { extractErrorsIdentity } from '../../shared/functions/extractErrors';
import { AuthenticationForm } from '../authentication-form/authentication-form';
import { UserCredentialsDTO } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  imports: [DisplayErrors, AuthenticationForm],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  securityService = inject(SecurityService);
  router = inject(Router);
  errors: string[] = [];

  login(credentials: UserCredentialsDTO) {
    this.securityService.login(credentials).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errors = extractErrorsIdentity(err);
      },
    });
  }
}
