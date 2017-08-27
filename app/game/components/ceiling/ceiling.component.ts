import { Ceiling } from './../../../models/Ceiling';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ceiling-object',
    moduleId: module.id,
    templateUrl: './ceiling.component.html',
    styleUrls: ['./ceiling.component.css']
})
export class CeilingComponent implements OnInit {

    @Input() ceiling: Ceiling;

    ngOnInit() {
        this.ceiling.animate();
    }


}
