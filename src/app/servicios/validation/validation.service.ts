import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  fieldIsValid(formGroup: FormGroup, nameField: string): boolean {
    const field = formGroup?.get(nameField);
    return field?.errors && field.touched;
  }

  generateErrorField(formGroup: FormGroup, nameField: string, errorsObject: object): string{
    
    const errors = formGroup?.get(nameField)?.errors;
    if(!errors) return '';
    
    const [errorKey] = Object.keys(errors);
    const message = errorsObject?.[nameField]?.[errorKey];
    if(!message) return '';

    return message;

  }
}
