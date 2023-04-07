import { AbstractControl } from '@angular/forms';

export type RegisterFormGroup = {
  email: AbstractControl<string | null>,
  username: AbstractControl<string | null>
  password: AbstractControl<string | null>
  agb: AbstractControl<boolean | null>
}
