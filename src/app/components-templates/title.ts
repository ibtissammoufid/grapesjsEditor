import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'Btitle',
 template: `
 <h1>{{ to.label }}</h1>
 `,
})
export class TitleComponent extends FieldType {}