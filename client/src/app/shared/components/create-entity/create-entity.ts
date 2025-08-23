import {
  AfterViewInit,
  Component,
  ComponentRef,
  inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { extractErrors } from '../../functions/extractErrors';
import { ICRUDService } from '../../interfaces/ICRUDService';
import { CRUD_SERVICE_TOKEN } from '../../providers/providers';
import { DisplayErrors } from '../display-errors/display-errors';

@Component({
  selector: 'app-create-entity',
  imports: [DisplayErrors],
  templateUrl: './create-entity.html',
  styleUrl: './create-entity.css',
})
export class CreateEntity<TDTO, TCreationDTO> implements AfterViewInit {
  errors: string[] = [];
  CRUDService = inject(CRUD_SERVICE_TOKEN) as ICRUDService<TDTO, TCreationDTO>;
  router = inject(Router);

  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  indexRoute!: string;

  @Input({ required: true })
  formComponent: any;

  @ViewChild('contentForm', { read: ViewContainerRef })
  contentForm!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;

  ngAfterViewInit(): void {
    this.componentRef = this.contentForm.createComponent(this.formComponent);
    this.componentRef.instance.postForm.subscribe((model: TCreationDTO) => {
      this.saveChanges(model);
    });
  }

  saveChanges(actor: TCreationDTO) {
    this.CRUDService.create(actor).subscribe({
      next: () => {
        this.router.navigate([this.indexRoute]);
      },
      error: (err) => {
        const errors = extractErrors(err);
        this.errors = errors;
      },
    });
  }
}
