import { AbstractControl } from '@angular/forms';

export type LoginFormGroup = {
  email: AbstractControl<any>,
  password: AbstractControl<any>
}
