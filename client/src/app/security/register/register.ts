import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayErrors } from '../../shared/components/display-errors/display-errors';
import { extractErrorsIdentity } from '../../shared/functions/extractErrors';
import { AuthenticationForm } from '../authentication-form/authentication-form';
import { UserCredentialsDTO } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  imports: [DisplayErrors, AuthenticationForm],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  securityService = inject(SecurityService);
  router = inject(Router);
  errors: string[] = [];

  register(credentials: UserCredentialsDTO) {
    this.securityService.register(credentials).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errors = extractErrorsIdentity(err);
      },
    });
  }
}
