import { Component } from '@angular/core';

@Component({
  selector: 'bcp-loading',
  template: `
    <div class="loading">
      <img src="assets/logobcp.png" alt="Logo del banco de crédito del Perú" />
    </div>
  `,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {}
