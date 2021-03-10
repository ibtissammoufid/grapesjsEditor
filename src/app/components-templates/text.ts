import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'text',
 template: `
   <p>{{ to.label }}</p>
 `,
})
export class TextComponent extends FieldType {}