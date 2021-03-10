import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'titlee',
 template: `
   <b>{{ to.label }}</b>
 `,
})
export class TitleComponent extends FieldType {}