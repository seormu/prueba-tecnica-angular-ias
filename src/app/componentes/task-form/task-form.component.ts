import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../servicios/validation/validation.service';
import { TODO_SAVE } from '../../validations/todoValidationsForm';
import { Todos } from '../../models/TaskModel';
import { TaskService } from '../../servicios/task/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  formTask: FormGroup;
  textValidationForm: string = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validationService: ValidationService,
    private readonly taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formTask = this.formBuilder.group({
      todo: ['', [Validators.required]],
      idUser: ['', [Validators.required]]
    })
  }

  saveTodo(): void {
    if (this.formTask.valid) {
      const task: Todos = {
        id: null,
        todo: this.formTask.get('todo').value,
        completed: false,
        userId: this.formTask.get('idUser').value
      }
      console.log("todo", task)
      this.taskService.saveTask(task)
      .subscribe(_ => {

      }, error => {
        this.textValidationForm = 'Error save task'
      });

    } else {
      this.textValidationForm = 'form invalid';
    }
  }

  fieldIsValid(nameField: string): boolean {
    return this.validationService.fieldIsValid(this.formTask, nameField);
  }

  generateErrorField(nameField: string): string {
    this.textValidationForm = ''
    return this.validationService.generateErrorField(this.formTask, nameField, TODO_SAVE)
  }

}
