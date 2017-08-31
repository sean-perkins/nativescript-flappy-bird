import { Input, ViewChild, ElementRef } from '@angular/core';
import { Component } from '@angular/core';

import { Label } from 'tns-core-modules/ui/label';

@Component({
    selector: 'land-object',
    moduleId: module.id,
    templateUrl: './land.component.html',
    styleUrls: ['./land.component.css']
})
export class LandComponent {

    @Input() animating: boolean;
    @Input() row = 2;

    @ViewChild('land') landEl: ElementRef;;

    get position(): number {
        const land: Label = this.landEl.nativeElement;
        return land.getLocationOnScreen().y;
    }


}
