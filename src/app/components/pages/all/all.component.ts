import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent {
  newTask = ''

  addTask(){
    console.log('Submitted',this.newTask);
    
  }

}
