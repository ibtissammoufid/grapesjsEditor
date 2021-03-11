import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
 selector: 'section',
 template: `
    <div>
        <ng-container #fieldComponent></ng-container>
    </div>
 `,
})
export class SectionWrapperComponent extends FieldWrapper {
}