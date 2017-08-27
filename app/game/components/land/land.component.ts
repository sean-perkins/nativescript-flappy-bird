import { Land } from './../../../models/Land';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'land-object',
    moduleId: module.id,
    templateUrl: './land.component.html',
    styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

    @Input() land: Land;

    @Input() row = 2;

    ngOnInit() {
        this.land.animate();
    }

}
