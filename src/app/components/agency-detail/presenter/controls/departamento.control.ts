import { Validators, FormControl } from '@angular/forms';

export class DepartamentoControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, DepartamentoControl.valid);
  }
}
