import { Validators, FormControl } from '@angular/forms';

export class ProvinciaControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, ProvinciaControl.valid);
  }
}
