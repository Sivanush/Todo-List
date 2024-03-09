import { Component } from '@angular/core';
import { AllComponent } from '../all/all.component';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [AllComponent,PageTitleComponent,CommonModule],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent extends AllComponent {

}
