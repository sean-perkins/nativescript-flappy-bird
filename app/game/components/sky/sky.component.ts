import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'sky-object',
    moduleId: module.id,
    templateUrl: './sky.component.html',
    styleUrls: ['./sky.component.css']
})
export class SkyComponent {

    @Input() animating: boolean;

    @Input() row = 1;

}
