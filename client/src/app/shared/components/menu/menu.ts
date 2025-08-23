import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Authorized } from '../../../security/authorized/authorized';
import { SecurityService } from '../../../security/security.service';

@Component({
  selector: 'app-menu',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    Authorized,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  securityService = inject(SecurityService);
}
