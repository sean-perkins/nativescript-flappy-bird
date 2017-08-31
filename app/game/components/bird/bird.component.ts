import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { Bird } from './../../../models/Bird';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Label } from 'tns-core-modules/ui/label';

@Component({
    selector: 'bird-player',
    moduleId: module.id,
    templateUrl: './bird.component.html',
    styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

    @Input() bird: Bird;

    @ViewChild('birdEl') birdEl: ElementRef;

    ngOnInit() {
        this.bird.animate();
    }

    get currentPosition(): number {
        return this.birdEl.nativeElement.getLocationOnScreen().y;
    }

    get position(): number {
        return 70 + this.bird.position;
    }

}
