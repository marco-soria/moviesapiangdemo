import { Component, inject, Input } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorized',
  imports: [],
  templateUrl: './authorized.html',
  styleUrl: './authorized.css',
})
export class Authorized {
  securityService = inject(SecurityService);

  @Input()
  role?: string;

  isAuthorized(): boolean {
    if (this.role) {
      return this.securityService.getRole() === this.role;
    } else {
      return this.securityService.isLoggedIn();
    }
  }
}
