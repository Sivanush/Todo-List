import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AllComponent } from '../all/all.component';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-importent',
  standalone: true,
  imports: [CommonModule,AllComponent,PageTitleComponent],
  templateUrl: './importent.component.html',
  styleUrl: './importent.component.scss'
})
export class ImportentComponent extends AllComponent {

}
