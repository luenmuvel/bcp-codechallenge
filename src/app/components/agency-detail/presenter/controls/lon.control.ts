import { Validators, FormControl } from '@angular/forms';

export class LongitudControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, LongitudControl.valid);
  }
}
