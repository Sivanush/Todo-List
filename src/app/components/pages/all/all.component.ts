import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [FormsModule, PageTitleComponent,CommonModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent {


  newTask = ''
  tasklist: any[] = []
  httpService = inject(HttpService)
  ngOnInit() {
    this.getTask()
  }
  addTask() {
    console.log('Submitted', this.newTask);
    this.httpService.addtask(this.newTask).subscribe((res) => {
      console.log('added')
      this.newTask = ''
      this.getTask()
    })
  }

  getTask() {
    this.httpService.getTask().subscribe((res: any) => {
      this.tasklist = res
      console.log('data retrived');
    })
  }


  @Output() important = new EventEmitter<any>()
  @Output() complete = new EventEmitter<any>()
  markImportent(task: any) {
    task.important = true
    this.important.emit(task) 
    this.httpService.updateTask(task).subscribe((res) => {
      console.log("make important");
      this.getTask()
    })
   
  }


  markComplete(task: any) {
    task.complete = true
    this.complete.emit(task)
    this.httpService.updateTask(task).subscribe((res) => {
      console.log("make complete");
      this.getTask()
    })
    
  }



}
