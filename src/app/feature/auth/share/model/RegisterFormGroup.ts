import { AbstractControl } from '@angular/forms';

export type RegisterFormGroup = {
  email: AbstractControl<string,string>,
  password: AbstractControl<string,string>,
  firstName:AbstractControl<string,string>,
  lastName:AbstractControl<string,string>
}
