import { Validators, FormControl } from '@angular/forms';

export class DistritoControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, DistritoControl.valid);
  }
}
