import { OnInit } from '@angular/core';
import { Bird } from './../../../models/Bird';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'bird-player',
    moduleId: module.id,
    templateUrl: './bird.component.html',
    styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

    @Input() bird: Bird;

    ngOnInit() {
        this.bird.animate();
    }

    get position(): number {
        return 70 + this.bird.position;
    }

}
