import { Input, ViewChild, ElementRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'ceiling-object',
    moduleId: module.id,
    templateUrl: './ceiling.component.html',
    styleUrls: ['./ceiling.component.css']
})
export class CeilingComponent {

    @Input() animating: boolean;
    @Input() row = 0;

    @ViewChild('ceilingEl') ceilingEl: ElementRef;

    get maxHeight(): number {
        return this.ceilingEl.nativeElement.getLocationOnScreen().y;
    }

}
