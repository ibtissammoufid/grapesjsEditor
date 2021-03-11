import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'button',
 template: `
 <a href="{{ to.goTo }}">{{ to.label }}</a>
 `,
})
export class ButtonComponent extends FieldType {}