import { Validators, FormControl } from '@angular/forms';

export class AgenciaControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, AgenciaControl.valid);
  }
}
