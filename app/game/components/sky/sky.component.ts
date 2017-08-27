import { Sky } from './../../../models/Sky';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sky-object',
    moduleId: module.id,
    templateUrl: './sky.component.html',
    styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

    @Input() sky: Sky;

    @Input() row = 1;

    ngOnInit() {
        this.sky.animate();
    }

}
