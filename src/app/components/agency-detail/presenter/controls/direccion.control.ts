import { Validators, FormControl } from '@angular/forms';

export class DireccionControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, DireccionControl.valid);
  }
}
