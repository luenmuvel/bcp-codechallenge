import { Validators, FormControl } from '@angular/forms';

export class IDControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, IDControl.valid);
  }
}
